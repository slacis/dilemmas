import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FriendRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend-requests',
  templateUrl: 'friend-requests.html',
})
export class FriendRequestsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  mode = this.navParams.get('mode')

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendRequestsPage');
  }

}
