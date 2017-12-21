import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FriendRequestsPage} from "../friend-requests/friend-requests";

/**
 * Generated class for the RequestTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-tabs',
  templateUrl: 'request-tabs.html',
})
export class RequestTabsPage {
  friendRequests = FriendRequestsPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  paramsIn = {
    mode: 'incoming',
  };

  paramsOut = {
    mode: 'outgoing',
  };




  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestTabsPage');
  }

}
