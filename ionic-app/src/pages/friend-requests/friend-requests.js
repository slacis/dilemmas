import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController, ModalController, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { DataStorageProvider } from "../../providers/data-storage/data-storage";
import { FriendProvider } from "../../providers/friend/friend";
import { TabsPage } from "../tabs/tabs";
/**
 * Generated class for the FriendRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var FriendRequestsPage = (function () {
    function FriendRequestsPage(friendProvider, alertCtrl, dataStorage, http, storage, loadingCtrl, modalCtrl, navCtrl, navParams) {
        this.friendProvider = friendProvider;
        this.alertCtrl = alertCtrl;
        this.dataStorage = dataStorage;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.friends = [];
        this.loaded = false;
        this.noFriends = false;
        this.mode = this.navParams.get('mode');
    }
    FriendRequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoicesPage');
    };
    FriendRequestsPage.prototype.ionViewWillEnter = function () {
        if (this.mode == 'incoming') {
            // if (this.friendProvider.onGetIncomingReload() == true) {
            this.onGetFriendRequests();
            // this.friendProvider.reloadIncoming = false
            // }
            // else {
            //   this.getIncomingFriends();
            // }
        }
        else {
            // if (this.friendProvider.onGetOutgoingReload() == true) {
            this.onGetOutgoingFriendRequests();
            // this.friendProvider.reloadOutgoing = false
            // }
            // else {
            //   this.getOutgoingFriends();
            // }
        }
        // console.log(this.choices)
    };
    FriendRequestsPage.prototype.onClose = function () {
        this.navCtrl.setRoot(TabsPage);
        this.navCtrl.push(TabsPage);
    };
    FriendRequestsPage.prototype.onGetFriendRequests = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Fetching friend requests...'
        });
        loading.present();
        this.storage.get('token').then(function (token) {
            _this.friendProvider.getIncomingFriendRequests(token)
                .subscribe(function (data) {
                console.log('server storage');
                console.log(data);
                _this.friends = data;
                _this.dataStorage.onStoreIncomingFriendRequests(_this.friends);
                if (_this.friends.length == 0) {
                    _this.noFriends = true;
                }
                _this.loaded = true;
                loading.dismiss();
                // return this.choices.slice()
            }, function (err) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Unable to load friend requests!',
                    message: err.error.message,
                    buttons: ['Ok']
                });
                console.log(err);
                alert.present();
            });
        });
    };
    FriendRequestsPage.prototype.getIncomingFriends = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Fetching friend...'
        });
        loading.present();
        this.dataStorage.onGetIncomingFriendRequests()
            .then(function (friends) {
            if (!(friends == null)) {
                _this.friends = friends;
                loading.dismiss();
                console.log('local storage');
                _this.loaded = true;
                console.log(friends);
                return _this.friends.slice();
            }
            else {
                _this.storage.get('token').then(function (token) {
                    _this.friendProvider.getIncomingFriendRequests(token)
                        .subscribe(function (data) {
                        // console.log(data)
                        console.log('server storage');
                        _this.loaded = true;
                        console.log(friends);
                        _this.friends = data;
                        _this.dataStorage.onStoreIncomingFriendRequests(_this.friends);
                        loading.dismiss();
                        // return this.choices.slice()
                    }, function (err) {
                        loading.dismiss();
                        var alert = _this.alertCtrl.create({
                            title: 'Unable to load friend requests!',
                            message: err.error.message,
                            buttons: ['Ok']
                        });
                        console.log(err);
                        alert.present();
                    });
                });
            }
        });
    };
    FriendRequestsPage.prototype.onGetOutgoingFriendRequests = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Fetching friend requests...'
        });
        loading.present();
        this.storage.get('token').then(function (token) {
            _this.friendProvider.getOutgoingFriendRequests(token)
                .subscribe(function (data) {
                console.log('server storage');
                // console.log(choices)
                // console.log(choices)
                _this.friends = data;
                _this.dataStorage.onStoreOutgoingFriendRequests(_this.friends);
                if (_this.friends.length == 0) {
                    _this.noFriends = true;
                }
                _this.loaded = true;
                loading.dismiss();
                // return this.choices.slice()
            }, function (err) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Unable to load friend requests!',
                    message: err.error.message,
                    buttons: ['Ok']
                });
                console.log(err);
                alert.present();
            });
        });
    };
    FriendRequestsPage.prototype.getOutgoingFriends = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Fetching friend...'
        });
        loading.present();
        this.dataStorage.onGetOutgoingFriendRequests()
            .then(function (friends) {
            if (!(friends == null)) {
                _this.friends = friends;
                if (_this.friends.length == 0) {
                    _this.noFriends = true;
                }
                loading.dismiss();
                console.log('local storage');
                _this.loaded = true;
                console.log(friends);
                return _this.friends.slice();
            }
            else {
                _this.storage.get('token').then(function (token) {
                    _this.friendProvider.getOutgoingFriendRequests(token)
                        .subscribe(function (data) {
                        // console.log(data)
                        console.log('server storage');
                        _this.loaded = true;
                        console.log(friends);
                        _this.friends = data;
                        if (_this.friends.length == 0) {
                            _this.noFriends = true;
                        }
                        _this.dataStorage.onStoreOutgoingFriendRequests(_this.friends);
                        loading.dismiss();
                        // return this.choices.slice()
                    }, function (err) {
                        loading.dismiss();
                        var alert = _this.alertCtrl.create({
                            title: 'Unable to load friend requests!',
                            message: err.error.message,
                            buttons: ['Ok']
                        });
                        console.log(err);
                        alert.present();
                    });
                });
            }
        });
    };
    FriendRequestsPage.prototype.onAdd = function (user) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Accepting friend request...'
        });
        loading.present();
        this.storage.get('token').then(function (token) {
            _this.friendProvider.onAcceptFriend(parseInt(user.user_id), token)
                .subscribe(function (data) {
                console.log(data);
                _this.friends.splice(_this.friends.indexOf(user), 1);
                // this.dataStorage.onStoreIncomingFriendRequests(this.friends)
                if (_this.friends.length == 0) {
                    _this.noFriends = true;
                }
                _this.loaded = true;
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Success',
                    message: 'successfully added friend!',
                    buttons: ['Ok']
                });
                alert.present();
                // return this.choices.slice()
            }, function (err) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Unable to load friend requests!',
                    message: err.error.message,
                    buttons: ['Ok']
                });
                console.log(err);
                alert.present();
            });
        });
    };
    FriendRequestsPage.prototype.onDelete = function (user) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Deleting friend request...'
        });
        loading.present();
        this.storage.get('token').then(function (token) {
            _this.friendProvider.onDeleteFriendRequest(parseInt(user.user_id), token)
                .subscribe(function (data) {
                console.log(data);
                _this.friends.splice(_this.friends.indexOf(user), 1);
                // this.dataStorage.onStoreIncomingFriendRequests(this.friends)
                if (_this.friends.length == 0) {
                    _this.noFriends = true;
                }
                _this.loaded = true;
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Success',
                    message: 'Successfully deleted friend request!',
                    buttons: ['Ok']
                });
                alert.present();
                // return this.choices.slice()
            }, function (err) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Unable to delete friend request!',
                    message: err.error.message,
                    buttons: ['Ok']
                });
                console.log(err);
                alert.present();
            });
        });
    };
    FriendRequestsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-friend-requests',
                    templateUrl: 'friend-requests.html',
                },] },
    ];
    /** @nocollapse */
    FriendRequestsPage.ctorParameters = function () { return [
        { type: FriendProvider, },
        { type: AlertController, },
        { type: DataStorageProvider, },
        { type: HttpClient, },
        { type: Storage, },
        { type: LoadingController, },
        { type: ModalController, },
        { type: NavController, },
        { type: NavParams, },
    ]; };
    return FriendRequestsPage;
}());
export { FriendRequestsPage };
//# sourceMappingURL=friend-requests.js.map