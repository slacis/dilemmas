import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FriendRequestsPage } from "../friend-requests/friend-requests";
import { TabsPage } from "../tabs/tabs";
// import {Tab} from "ionic-angular/umd/navigation/nav-interfaces";
/**
 * Generated class for the RequestTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var RequestTabsPage = (function () {
    function RequestTabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedTab = 0;
        this.friendRequests = FriendRequestsPage;
        this.paramsIn = {
            mode: 'incoming',
        };
        this.paramsOut = {
            mode: 'outgoing',
        };
    }
    RequestTabsPage.prototype.tabChanged = function (tab) {
        this.selectedTab = tab.index;
    };
    RequestTabsPage.prototype.onClose = function () {
        this.navCtrl.setRoot(TabsPage);
        // this.navCtrl.push(TabsPage)
    };
    RequestTabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestTabsPage');
    };
    RequestTabsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-request-tabs',
                    templateUrl: 'request-tabs.html',
                },] },
    ];
    /** @nocollapse */
    RequestTabsPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
    ]; };
    return RequestTabsPage;
}());
export { RequestTabsPage };
//# sourceMappingURL=request-tabs.js.map