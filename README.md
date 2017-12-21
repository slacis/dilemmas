# Dilemmas

Ionic App (Android and iOS) with a 'Infrastructure-free' backend using Flask/Zappa/AWS

Do you find it hard to make menial decisions like 'What movie should I see?' or 'What type of food should I eat for dinner?'
Do you ever find yourself thinking that you would be fine with doing/eating/watching anything, as long as somebody else chooses?
With Dilemmas, you can have your friends decide these dilemmas for you, and help them make their decisions! You can also
seek the wisdom of people who you don't know, and vise versa.


## Getting Started

1. Clone the git repository to your computer 
2. Create a MySQL Database either locally or remotely: https://www.mysql.com/
3. In the 'backend' folder, create a file called '.env' and fill it with the following details:

```
DB_HOST='your.database.host'
DB_USERNAME='your.database.username'
DB_PASSWORD='your.database.password'
DB_NAME='your.database.name'
SECRET_KEY='your.secret.key'
BUCKET='your.s3.bucket'
```
4. More instructions coming soon!


### Prerequisites

* [NPM](https://www.npmjs.com/) - Node Packet Manager
* [Ionic Framework](https://ionicframework.com/) - Ionic Framework for multi-platform app development
* [MySQL](https://www.mysql.com//)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
