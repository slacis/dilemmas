import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Tabs} from 'ionic-angular';
import {FriendRequestsPage} from "../friend-requests/friend-requests";
import {TabsPage} from "../tabs/tabs";
import {Tab} from "ionic-angular/umd/navigation/nav-interfaces";

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
  selectedTab = 0;
  friendRequests = FriendRequestsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  paramsIn = {
    mode: 'incoming',
  };

  paramsOut = {
    mode: 'outgoing',
  };

  tabChanged(tab: Tab) {
    this.selectedTab = tab.index;
  }
  onClose(){
    this.navCtrl.setRoot(TabsPage)
    // this.navCtrl.push(TabsPage)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestTabsPage');

  }

}
