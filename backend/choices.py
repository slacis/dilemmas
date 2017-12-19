import base64
import boto3
import datetime
import jwt
import logging
import os
import re
import time
import uuid
from functools import wraps
from os.path import join, dirname

from dotenv import load_dotenv
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import exc, and_
from werkzeug.security import generate_password_hash, check_password_hash

s3 = boto3.resource('s3')
s3_client = boto3.client('s3')
dotenv_path = join(dirname(__file__), ".env")
load_dotenv(dotenv_path, verbose=True)

DB_HOST = os.environ.get("DB_HOST")
DB_PORT = int(os.environ.get("DB_PORT", 3306))
NAME = os.environ.get("DB_USERNAME")
PASSWORD = os.environ.get("DB_PASSWORD")
DB_NAME = os.environ.get("DB_NAME")
SECRET_KEY = os.environ.get("SECRET_KEY")
# S3
BUCKET = os.environ.get("BUCKET")


app = Flask(__name__)
CORS(app)
logger = logging.getLogger()
logger.setLevel(logging.INFO)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://'+NAME+':'+PASSWORD+'@'+DB_HOST+'/'+DB_NAME
db = SQLAlchemy(app)


class User_Made_Choice(db.Model):
    __tablename__ = 'user_made_choice'

    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), primary_key=True)
    choice_id = db.Column(db.Integer, db.ForeignKey('choice.choice_id'), primary_key=True)
    selection_option = db.Column(db.Integer)

    choice = db.relationship("Choice", back_populates="users")
    user = db.relationship("User", back_populates="choices_decided")

class User(db.Model):
    __tablename__ = 'user'
    user_id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    username = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(80))
    admin = db.Column(db.Boolean)
    #   Relationships
    choices_decided = db.relationship("User_Made_Choice", back_populates="user")
    choices = db.relationship("Choice", back_populates="user")

class Choice(db.Model):
    __tablename__ = 'choice'
    choice_id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(200))
    optionOne = db.Column(db.String(200))
    optionTwo = db.Column(db.String(200))
    base64ImageOne = db.Column(db.String(60))
    base64ImageTwo = db.Column(db.String(60))
    timeStamp = db.Column(db.String(200))
    optionOneScore = db.Column(db.Integer)
    optionTwoScore = db.Column(db.Integer)
    accepted = db.Column(db.Boolean)
    # Foreign Keys
    creator_id = db.Column(db.Integer, db.ForeignKey('user.user_id'))
    users = db.relationship("User_Made_Choice", back_populates="choice")
    user = db.relationship("User", back_populates="choices")

def token_guard(f):
    @wraps(f)
    def token_decorator(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message': 'No token found'}), 401

        try:
            data = jwt.decode(token, SECRET_KEY)
            current_user = User.query.filter_by(public_id=data['public_id']).first()
            print(current_user)
        except:
            return jsonify({'message': 'Invalid token'}), 401

        return f(current_user, *args, **kwargs)
    return token_decorator


@app.route('/')
def index():
    return "Hello World!", 200
# include this for local dev


@app.route('/user', methods=['GET'])
@token_guard
def get_all_users(current_user):
    if not current_user.admin:
        return jsonify({'message': 'Function cannot be performed'})
    users = User.query.all()
    output = []

    for user in users:
        user_data = {}
        user_data['public_id'] = user.public_id
        user_data['username'] = user.username
        user_data['password'] = user.password
        user_data['admin'] = user.admin
        output.append(user_data)
    return jsonify({'users': output})

@app.route('/user', methods=['POST'])
# @token_guard
@cross_origin()
def create_user():
    # if not current_user.admin:
    #     return jsonify({'message': 'Function cannot be performed'})
    data = request.get_json()
    print(data)
    hashed_password = generate_password_hash(data['password'], method='sha256')
    new_user = User(public_id=str(uuid.uuid4()), username=data['username'], password=hashed_password, admin=False)
    db.session.add(new_user)
    try:
        db.session.commit()
        return jsonify({'success': True, 'message': 'New user created!'})
    except exc.IntegrityError as err:
        return jsonify({'success': False, 'message': err.orig.args})



@app.route('/user/<public_id>', methods=['GET'])
@token_guard
def get_one_user(current_user, public_id):
    if not current_user.admin:
        return jsonify({'message': 'Function cannot be performed'})
    user = User.query.filter_by(public_id=public_id).first()
    if not user:
        return jsonify({'message': 'No user found'})

    user_data = {}
    user_data['public_id'] = user.public_id
    user_data['username'] = user.username
    user_data['password'] = user.password
    user_data['admin'] = user.admin

    return jsonify({'user': user_data})

@app.route('/user/<public_id>', methods=['PUT'])
@token_guard
def promote_user(current_user, public_id):
    if not current_user.admin:
        return jsonify({'message': 'Function cannot be performed'})

    user = User.query.filter_by(public_id=public_id).first()
    if not user:
        return jsonify({'message': 'No user found'})

    user.admin = True
    db.session.commit()
    return jsonify({'message': 'User promoted to admin'})

@app.route('/user/<public_id>', methods=['DELETE'])
@token_guard
def delete_user(current_user, public_id):
    if not current_user.admin:
        return jsonify({'message': 'Function cannot be performed'})

    user = User.query.filter_by(public_id=public_id).first()
    if not user:
        return jsonify({'message': 'No user found'})

    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted'})

@app.route('/login')
def login():
    auth = request.authorization
    print(auth)
    if not auth or not auth.username or not auth.password:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic-Realm="Login Required"'})

    user = User.query.filter_by(username=auth.username).first()
    if not user:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic-Realm="Login Required"'})

    if check_password_hash(user.password, auth.password):
        token = jwt.encode({'public_id': user.public_id,
                            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60*5)},
                           SECRET_KEY)
        return jsonify({'success': True, 'token': token.decode('UTF-8')})
    return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic-Realm="Login Required"'})

@app.route('/choices', methods=['GET'])
@token_guard
def get_all_choices(current_user):
    choices = Choice.query.filter_by(creator_id=current_user.user_id).all()
    output = []
    for choice in choices:
        base64ImageOne = download_and_convert_image(choice.base64ImageOne) if (choice.base64ImageOne != '0') else '0'
        base64ImageTwo = download_and_convert_image(choice.base64ImageTwo) if (choice.base64ImageTwo != '0') else '0'
        choice_data = {}
        choice_data['choice_id'] = str(choice.choice_id)
        choice_data['description'] = choice.description
        choice_data['optionOne'] = choice.optionOne
        choice_data['optionTwo'] = choice.optionTwo
        choice_data['base64ImageOne'] = base64ImageOne
        choice_data['base64ImageTwo'] = base64ImageTwo
        choice_data['timeStamp'] = choice.timeStamp
        choice_data['optionOneScore'] = choice.optionOneScore
        choice_data['optionTwoScore'] = choice.optionTwoScore
        choice_data['accepted'] = choice.accepted
        choice_data['creator_id'] = choice.creator_id
        output.append(choice_data)
    return jsonify(output)

@app.route('/random_choices', methods=['GET'])
@cross_origin()
@token_guard
def get_random_choices(current_user):
    # choices = Choice.query.order_by(func.rand()).limit(3)
    # Find choices not created by user and not previously voted on by user
    # choices = Choice.query.join(User_Made_Choice, Choice.choice_id==User_Made_Choice.choice_id)\
    #     .filter(and_(User_Made_Choice.user_id != current_user.user_id, Choice.creator_id != current_user.user_id)).limit(5)
    subq = subq = Choice.query.with_entities(Choice.choice_id).outerjoin(User_Made_Choice).filter(User_Made_Choice.user_id == current_user.user_id).subquery()
    choices = Choice.query.filter(and_(~Choice.choice_id.in_(subq), Choice.creator_id != current_user.user_id)).limit(5)
    output = []
    for choice in choices:
        print('URI!')
        print(choice.base64ImageOne)

        base64ImageOne = download_and_convert_image(choice.base64ImageOne) if (choice.base64ImageOne != '0') else '0'
        base64ImageTwo = download_and_convert_image(choice.base64ImageTwo) if (choice.base64ImageTwo != '0') else '0'
        choice_data = {}
        choice_data['choice_id'] = str(choice.choice_id)
        choice_data['description'] = choice.description
        choice_data['optionOne'] = choice.optionOne
        choice_data['optionTwo'] = choice.optionTwo
        choice_data['base64ImageOne'] = base64ImageOne
        choice_data['base64ImageTwo'] = base64ImageTwo
        choice_data['timeStamp'] = choice.timeStamp
        choice_data['optionOneScore'] = choice.optionOneScore
        choice_data['optionTwoScore'] = choice.optionTwoScore
        choice_data['accepted'] = choice.accepted
        choice_data['creator_id'] = choice.creator_id
        output.append(choice_data)
    return jsonify(output)

@app.route('/choices', methods=['POST'])
@cross_origin()
@token_guard
def create_choice(current_user):
    data = request.get_json()
    timeStamp = str(time.time())
    filePath = str(current_user.user_id) + '/' + timeStamp + '/'
    if (data['base64ImageOne'] != '0'):
        base64ImageOneDecoded = base64.urlsafe_b64decode(re.sub('^data:image/.+;base64,', '', data['base64ImageOne']))
        imageOneObject = s3.Object(BUCKET, filePath + 'one.jpg').put(Body=base64ImageOneDecoded)
        finalPathOne = filePath + 'one.jpg'
    else:
        finalPathOne = '0'
    if (data['base64ImageTwo'] != '0'):
        base64ImageTwoDecoded = base64.urlsafe_b64decode(re.sub('^data:image/.+;base64,', '', data['base64ImageTwo']))
        imageTwoObject = s3.Object(BUCKET, filePath + 'two.jpg').put(Body=base64ImageTwoDecoded)
        finalPathTwo = filePath + 'two.jpg'
    else:
        finalPathTwo = '0'

    user = User.query.filter_by(user_id=current_user.user_id).first()
    new_choice = Choice(
        description = data['description'],
        optionOne = data['optionOne'],
        optionTwo = data['optionTwo'],
        base64ImageOne = finalPathOne,
        base64ImageTwo = finalPathTwo,
        timeStamp = timeStamp,
        optionOneScore = 0,
        optionTwoScore = 0,
        accepted = False,
        creator_id = current_user.user_id,
        user = user
    )
    db.session.add(new_choice)
    try:
        db.session.commit()
        return jsonify({'message': 'choice created!'})
    except Exception as e:
        return jsonify({'message': e.args})


@app.route('/choices/<choice_id>', methods=['GET'])
@token_guard
def get_one_choice(current_user, choice_id):
    choice = Choice.query.filter_by(choice_id=choice_id, creator_id=current_user.user_id).first()
    if not choice:
        return jsonify({'message': 'No choice with this id found'})
    base64ImageOne = download_and_convert_image(choice.base64ImageOne) if (choice.base64ImageOne != '0') else '0'
    base64ImageTwo = download_and_convert_image(choice.base64ImageOne) if (choice.base64ImageTwo != '0') else '0'
    choice_data = {}
    choice_data['choice_id'] = choice.choice_id
    choice_data['description'] = choice.description
    choice_data['optionOne'] = choice.optionOne
    choice_data['optionTwo'] = choice.optionTwo
    choice_data['base64ImageOne'] = base64ImageOne
    choice_data['base64ImageTwo'] = base64ImageTwo
    choice_data['timeStamp'] = choice.timeStamp
    choice_data['timeStamp'] = choice.timeStamp
    choice_data['optionOneScore'] = choice.optionOneScore
    choice_data['optionTwoScore'] = choice.optionTwoScore
    choice_data['accepted'] = choice.accepted
    choice_data['creator_id'] = choice.creator_id

    return jsonify(choice_data)
@app.route('/choices/<choice_id>', methods=['PUT'])
@token_guard
def accept_choice(current_user, choice_id):
    choice = Choice.query.filter_by(choice_id=choice_id, creator_id=current_user.user_id).first()

    if not choice:
        return jsonify({'message': 'No choice with this id found'})

    choice.accepted = True
    db.session.commit();

    return jsonify({'message': 'Accepted choice!'})

@app.route('/choices/<choice_id>', methods=['DELETE'])
@token_guard
def delete_choice(current_user, choice_id):
    choice = Choice.query.filter_by(choice_id=choice_id, creator_id=current_user.user_id).first()

    if not choice:
        return jsonify({'message': 'No choice with this id found'})

    db.session.delete(choice)
    db.session.commit()
    return jsonify({'message': 'Choice deleted!'})

@app.route('/user_made_choice', methods=['POST'])
@token_guard
def add_choice_made(current_user):
    data = request.get_json()
    user = User.query.filter_by(user_id=current_user.user_id).first()
    for choice in data['choice']:
        choice_q = Choice.query.filter_by(choice_id=choice['choice']['choice_id']).first()
        decision = choice['decision']
        if decision:
            choice_q.optionOneScore += 1
            association = User_Made_Choice(user_id=current_user.user_id, selection_option=1)
        else:
            choice_q.optionTwoScore += 1
            association = User_Made_Choice(user_id=current_user.user_id, selection_option=2)
        association.choice = choice_q
        user.choices_decided.append(association)
        db.session.add(user)
        db.session.add(choice_q)
        db.session.add(association)
        # True is A, False is B
    try:
        db.session.commit()
    except:
        return jsonify({'message': 'Something went wrong'})
    return jsonify({'message': 'Decisions added to user\'s choice successfuly'})

@app.route('/is_authenticated', methods=['GET'])
@cross_origin()
@token_guard
def is_authenticated(current_user):
    return jsonify({'isAuthenticated': True})

# @app.route('/user_made_choice', methods=['PUT'])
# @token_guard
# def update_choice_made(current_user):
#     data = request.get_json()
#     choice = Choice.query.filter_by(choice_id=data['choice_id']).first()
#     user = User.query.filter_by(user_id=current_user.user_id).first()

def download_and_convert_image(uri):
    print('URI!')
    print(uri)
    print(BUCKET)
    # s3_client.download_file(BUCKET, uri, 'one.jpg')
    s3_client.download_file(BUCKET, uri, '/tmp/one.jpg')
    print('URI!')
    print(uri)
    fileType = 'data:image/jpeg;base64,'
    # with open("one.jpg", "rb") as image:
    with open("/tmp/one.jpg", "rb") as image:
        imageOneBytes = image.read()
    imageOneb64Bytes = base64.b64encode(imageOneBytes)
    base64Image = fileType + imageOneb64Bytes.decode('utf-8')
    return base64Image




if __name__ == '__main__':
    app.run(debug=True)



    # # CONNECT TO DB
    # def connect():
    #     try:
    #         print(DB_PORT)
    #         cursor = pymysql.cursors.DictCursor
    #         conn = pymysql.connect(DB_HOST, user=NAME, passwd=PASSWORD, db=DB_NAME, port=DB_PORT, cursorclass=cursor,
    #                                connect_timeout=5)
    #         logger.info("SUCCESS: connection to EC2 MySQL Database established")
    #         print('success')
    #         return (conn)
    #     except Exception as e:
    #         logger.exception("Database Connection Error")