import {Component} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage"
import {DataStorageProvider} from "../../providers/data-storage/data-storage";
import * as globals from "../../app/shared/globals"
import {User} from "../../models/user.model";
import {FriendProvider} from "../../providers/friend/friend";

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
  friends: User[] = [];
  newFriend = ''
  loaded = false;
  noFriends = false;
  constructor(
    private friendProvider: FriendProvider,
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


  // onShowImage(image, imgNum){
  //   let imageModal = this.modalCtrl.create(ViewImagePage, { image: image, imgNum: imgNum });
  //   imageModal.present();
  // }

  onGetFriends() {
    const loading = this.loadingCtrl.create({
      content: 'Fetching friend...'
    });
    loading.present();
    this.storage.get('token').then(
      token => {
        this.friendProvider.getServerFriends(token)
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
                message: err.error.message,
                buttons: ['Ok']
              });
              console.log(err)
              alert.present();
            })
      })
  }

  getFriends() {
    const loading = this.loadingCtrl.create({
      content: 'Fetching friend...'
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
                this.friendProvider.getServerFriends(token)
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
                        message: err.error.message,
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

  onAddFriend(newFriend) {
    const loading = this.loadingCtrl.create({
      content: 'Adding friend...'
    });
    loading.present();
    this.storage.get('token').then(
      token => {
        this.friendProvider.onAddFriend(newFriend, token)
          .subscribe(
            (data) => {
              loading.dismiss()
              console.log(data)
              const alert = this.alertCtrl.create({
                title: 'Success',
                message: 'Friend Request Sent Successfully!',
                buttons: ['Ok']
              });
              alert.present();
            },
            err => {
              loading.dismiss()
              const alert = this.alertCtrl.create({
                title: 'Unable to add friend!',
                message: err.error.message,
                buttons: ['Ok']
              });
              console.log(err)
              alert.present();
            })
      })
  }





}
