import {Component} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage"
import {DataStorageProvider} from "../../providers/data-storage/data-storage";
import * as globals from "../../app/shared/globals"
import {User} from "../../models/user.model";
import {AddFriendPage} from "../add-friend/add-friend";

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
  friends: User[] = [];
  loaded = false;
  noFriends = false;
  AddFriendPage = AddFriendPage
  constructor(
    private alertCtrl: AlertController,
    private dataStorage: DataStorageProvider,
    public http: HttpClient,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoicesPage');
  }

  ionViewWillEnter() {
    // if (this.choiceProvider.reload == true){
    this.onGetFriends()
    // this.choiceProvider.reload = false
    // }
    // else {
    // this.getChoices();
    // }
    // console.log(this.choices)
    // }
  }

  onNewFriend()
    {
      this.navCtrl.push(AddFriendPage)
    }

  // onShowImage(image, imgNum){
  //   let imageModal = this.modalCtrl.create(ViewImagePage, { image: image, imgNum: imgNum });
  //   imageModal.present();
  // }

  onGetFriends() {
    const loading = this.loadingCtrl.create({
      content: 'Fetching friends...'
    });
    loading.present();
    this.storage.get('token').then(
      token => {
        this.getServerFriends(token)
          .subscribe(
            (data: User[]) => {
              // console.log(data)
              console.log('server storage')
              // console.log(choices)
              this.friends = data
              this.dataStorage.onStoreFriends(this.friends)
              if (this.friends.length == 0) {
                this.noFriends = true;
              }
              this.loaded = true;
              loading.dismiss()
              // return this.choices.slice()
            },
            err => {
              loading.dismiss()
              const alert = this.alertCtrl.create({
                title: 'Unable to load dilemmas!',
                message: err.message,
                buttons: ['Ok']
              });
              console.log(err)
              alert.present();
            })
      })
  }

  getFriends() {
    const loading = this.loadingCtrl.create({
      content: 'Fetching friends...'
    });
    loading.present();
    this.dataStorage.onGetFriends()
      .then(
        (friends: User[]) => {
          if (!(friends == null)) {
            this.friends = friends
            loading.dismiss()
            console.log('local storage')
            console.log(friends)
            return this.friends.slice()
          } else {
            this.storage.get('token').then(
              token => {
                this.getServerFriends(token)
                  .subscribe(
                    (data: User[]) => {
                      // console.log(data)
                      console.log('server storage')
                      console.log(friends)
                      this.friends = data
                      this.dataStorage.onStoreFriends(this.friends)
                      loading.dismiss()
                      // return this.choices.slice()
                    },
                    err => {
                      loading.dismiss()
                      const alert = this.alertCtrl.create({
                        title: 'Unable to load dilemmas!',
                        message: err.message,
                        buttons: ['Ok']
                      });
                      console.log(err)
                      alert.present();
                    })
              })
          }
        }
      )
  }

  getServerFriends(token) {
    return this.http.get(globals.serverAddress + '/friend',
      {
        headers: new HttpHeaders()
          .set('x-access-token', token)
          .set('Content-Type', "application/json")
          .set('Access-Control-Allow-Origin', '*')
      })
      .do(
        (data: User[]) => {
          console.log(data)
          this.friends = data
          this.dataStorage.onStoreFriends(this.friends)
          return this.friends.slice()
        })
  }


}
