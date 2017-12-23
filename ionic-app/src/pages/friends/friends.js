import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController, ModalController, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { DataStorageProvider } from "../../providers/data-storage/data-storage";
import { FriendProvider } from "../../providers/friend/friend";
// @IonicPage()
var FriendsPage = (function () {
    function FriendsPage(friendProvider, alertCtrl, dataStorage, http, storage, loadingCtrl, modalCtrl, navCtrl, navParams) {
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
        this.newFriend = '';
        this.loaded = false;
        this.noFriends = false;
    }
    FriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoicesPage');
    };
    FriendsPage.prototype.ionViewWillEnter = function () {
        // if (this.choiceProvider.reload == true){
        this.onGetFriends();
        // this.choiceProvider.reload = false
        // }
        // else {
        // this.getChoices();
        // }
        // console.log(this.choices)
        // }
    };
    // onShowImage(image, imgNum){
    //   let imageModal = this.modalCtrl.create(ViewImagePage, { image: image, imgNum: imgNum });
    //   imageModal.present();
    // }
    // onShowImage(image, imgNum){
    //   let imageModal = this.modalCtrl.create(ViewImagePage, { image: image, imgNum: imgNum });
    //   imageModal.present();
    // }
    FriendsPage.prototype.onGetFriends = 
    // onShowImage(image, imgNum){
    //   let imageModal = this.modalCtrl.create(ViewImagePage, { image: image, imgNum: imgNum });
    //   imageModal.present();
    // }
    function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Fetching friend...'
        });
        loading.present();
        this.storage.get('token').then(function (token) {
            _this.friendProvider.getServerFriends(token)
                .subscribe(function (data) {
                // console.log(data)
                console.log('server storage');
                // console.log(choices)
                // console.log(choices)
                _this.friends = data;
                _this.dataStorage.onStoreFriends(_this.friends);
                if (_this.friends.length == 0) {
                    _this.noFriends = true;
                }
                _this.loaded = true;
                loading.dismiss();
                // return this.choices.slice()
            }, function (err) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Unable to load dilemmas!',
                    message: err.error.message,
                    buttons: ['Ok']
                });
                console.log(err);
                alert.present();
            });
        });
    };
    FriendsPage.prototype.getFriends = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Fetching friend...'
        });
        loading.present();
        this.dataStorage.onGetFriends()
            .then(function (friends) {
            if (!(friends == null)) {
                _this.friends = friends;
                loading.dismiss();
                console.log('local storage');
                console.log(friends);
                return _this.friends.slice();
            }
            else {
                _this.storage.get('token').then(function (token) {
                    _this.friendProvider.getServerFriends(token)
                        .subscribe(function (data) {
                        // console.log(data)
                        console.log('server storage');
                        console.log(friends);
                        _this.friends = data;
                        _this.dataStorage.onStoreFriends(_this.friends);
                        loading.dismiss();
                        // return this.choices.slice()
                    }, function (err) {
                        loading.dismiss();
                        var alert = _this.alertCtrl.create({
                            title: 'Unable to load dilemmas!',
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
    FriendsPage.prototype.onAddFriend = function (newFriend) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Adding friend...'
        });
        loading.present();
        this.storage.get('token').then(function (token) {
            _this.friendProvider.onAddFriend(newFriend, token)
                .subscribe(function (data) {
                loading.dismiss();
                console.log(data);
                var alert = _this.alertCtrl.create({
                    title: 'Success',
                    message: 'Friend Request Sent Successfully!',
                    buttons: ['Ok']
                });
                alert.present();
            }, function (err) {
                loading.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Unable to add friend!',
                    message: err.error.message,
                    buttons: ['Ok']
                });
                console.log(err);
                alert.present();
            });
        });
    };
    FriendsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-friends',
                    templateUrl: 'friends.html',
                },] },
    ];
    /** @nocollapse */
    FriendsPage.ctorParameters = function () { return [
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
    return FriendsPage;
}());
export { FriendsPage };
//# sourceMappingURL=friends.js.map