import {Component} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Storage} from "@ionic/storage"
import {DataStorageProvider} from "../../providers/data-storage/data-storage";
import {User} from "../../models/user.model";
import {FriendProvider} from "../../providers/friend/friend";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the FriendRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-friend-requests',
  templateUrl: 'friend-requests.html',
})
export class FriendRequestsPage {
  friends: User[] = [];
  loaded = false;
  noFriends = false;
  mode = this.navParams.get('mode')
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
    if (this.mode == 'incoming') {
      // if (this.friendProvider.onGetIncomingReload() == true) {
      this.onGetFriendRequests()
      // this.friendProvider.reloadIncoming = false
      // }
      // else {
      //   this.getIncomingFriends();
      // }
    } else {
      // if (this.friendProvider.onGetOutgoingReload() == true) {
      this.onGetOutgoingFriendRequests()
      // this.friendProvider.reloadOutgoing = false
      // }
      // else {
      //   this.getOutgoingFriends();
      // }
    }
    // console.log(this.choices)

  }

  onClose(){
    this.navCtrl.setRoot(TabsPage)
    this.navCtrl.push(TabsPage)
  }

  onGetFriendRequests() {
    const loading = this.loadingCtrl.create({
      content: 'Fetching friend requests...'
    });
    loading.present();
    this.storage.get('token').then(
      token => {
        this.friendProvider.getIncomingFriendRequests(token)
          .subscribe(
            (data: User[]) => {
              console.log('server storage')
              console.log(data)
              this.friends = data
              this.dataStorage.onStoreIncomingFriendRequests(this.friends)
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
                title: 'Unable to load friend requests!',
                message: err.error.message,
                buttons: ['Ok']
              });
              console.log(err)
              alert.present();
            })
      })
  }

  getIncomingFriends() {
    const loading = this.loadingCtrl.create({
      content: 'Fetching friend...'
    });
    loading.present();
    this.dataStorage.onGetIncomingFriendRequests()
      .then(
        (friends: User[]) => {
          if (!(friends == null)) {
            this.friends = friends
            loading.dismiss()
            console.log('local storage')
            this.loaded = true
            console.log(friends)
            return this.friends.slice()
          } else {
            this.storage.get('token').then(
              token => {
                this.friendProvider.getIncomingFriendRequests(token)
                  .subscribe(
                    (data: User[]) => {
                      // console.log(data)
                      console.log('server storage')
                      this.loaded = true
                      console.log(friends)
                      this.friends = data
                      this.dataStorage.onStoreIncomingFriendRequests(this.friends)
                      loading.dismiss()
                      // return this.choices.slice()
                    },
                    err => {
                      loading.dismiss()
                      const alert = this.alertCtrl.create({
                        title: 'Unable to load friend requests!',
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

  onGetOutgoingFriendRequests() {
    const loading = this.loadingCtrl.create({
      content: 'Fetching friend requests...'
    });
    loading.present();
    this.storage.get('token').then(
      token => {
        this.friendProvider.getOutgoingFriendRequests(token)
          .subscribe(
            (data: User[]) => {
              console.log('server storage')
              // console.log(choices)
              this.friends = data
              this.dataStorage.onStoreOutgoingFriendRequests(this.friends)
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
                title: 'Unable to load friend requests!',
                message: err.error.message,
                buttons: ['Ok']
              });
              console.log(err)
              alert.present();
            })
      })
  }

  getOutgoingFriends() {
    const loading = this.loadingCtrl.create({
      content: 'Fetching friend...'
    });
    loading.present();
    this.dataStorage.onGetOutgoingFriendRequests()
      .then(
        (friends: User[]) => {
          if (!(friends == null)) {
            this.friends = friends
            if (this.friends.length == 0) {
              this.noFriends = true;
            }
            loading.dismiss()
            console.log('local storage')
            this.loaded = true
            console.log(friends)
            return this.friends.slice()
          } else {
            this.storage.get('token').then(
              token => {
                this.friendProvider.getOutgoingFriendRequests(token)
                  .subscribe(
                    (data: User[]) => {
                      // console.log(data)
                      console.log('server storage')
                      this.loaded = true
                      console.log(friends)
                      this.friends = data
                      if (this.friends.length == 0) {
                        this.noFriends = true;
                      }
                      this.dataStorage.onStoreOutgoingFriendRequests(this.friends)
                      loading.dismiss()
                      // return this.choices.slice()
                    },
                    err => {
                      loading.dismiss()
                      const alert = this.alertCtrl.create({
                        title: 'Unable to load friend requests!',
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

  onAdd(user: User) {
    const loading = this.loadingCtrl.create({
      content: 'Accepting friend request...'
    });
    loading.present();
    this.storage.get('token').then(
      token => {
        this.friendProvider.onAcceptFriend(parseInt(user.user_id), token)
          .subscribe(
            (data) => {
              console.log(data)
              this.friends.splice(this.friends.indexOf(user), 1)
              // this.dataStorage.onStoreIncomingFriendRequests(this.friends)
              if (this.friends.length == 0) {
                this.noFriends = true;
              }
              this.loaded = true;
              loading.dismiss()
              const alert = this.alertCtrl.create({
                title: 'Success',
                message: 'Successfully added friend!',
                buttons: ['Ok']
              });
              alert.present();
              // return this.choices.slice()
            },
            err => {
              loading.dismiss()
              const alert = this.alertCtrl.create({
                title: 'Unable to load friend requests!',
                message: err.error.message,
                buttons: ['Ok']
              });
              console.log(err)
              alert.present();
            })
      })
  }

  onDelete(user: User) {
    const loading = this.loadingCtrl.create({
      content: 'Deleting friend request...'
    });
    loading.present();
    this.storage.get('token').then(
      token => {
        this.friendProvider.onDeleteFriendRequest(parseInt(user.user_id), token)
          .subscribe(
            (data) => {
              console.log(data)
              this.friends.splice(this.friends.indexOf(user), 1)
              // this.dataStorage.onStoreIncomingFriendRequests(this.friends)
              if (this.friends.length == 0) {
                this.noFriends = true;
              }
              this.loaded = true;
              loading.dismiss()
              const alert = this.alertCtrl.create({
                title: 'Success',
                message: 'Successfully deleted friend request!',
                buttons: ['Ok']
              });
              alert.present();
              // return this.choices.slice()
            },
            err => {
              loading.dismiss()
              const alert = this.alertCtrl.create({
                title: 'Unable to delete friend request!',
                message: err.error.message,
                buttons: ['Ok']
              });
              console.log(err)
              alert.present();
            })
      })
  }


}
