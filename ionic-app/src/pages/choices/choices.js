import { Component } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController, NavParams } from 'ionic-angular';
import { AddChoicePage } from "../add-choice/add-choice";
import { ChoiceProvider } from "../../providers/choice/choice";
import { ViewImagePage } from "../view-image/view-image";
import { Storage } from "@ionic/storage";
import { DataStorageProvider } from "../../providers/data-storage/data-storage";
// @IonicPage()
var ChoicesPage = (function () {
    function ChoicesPage(alertCtrl, dataStorage, storage, loadingCtrl, modalCtrl, choiceProvider, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.dataStorage = dataStorage;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.choiceProvider = choiceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noChoices = false;
        this.ViewImage = ViewImagePage;
        this.choices = [];
    }
    ChoicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoicesPage');
    };
    ChoicesPage.prototype.ionViewWillEnter = function () {
        this.noChoices = false;
        if (this.choiceProvider.reload == true) {
            this.onGetChoices();
            this.choiceProvider.reload = false;
        }
        else {
            this.getChoices();
        }
        // console.log(this.choices)
    };
    ChoicesPage.prototype.onNewChoice = function () {
        this.navCtrl.push(AddChoicePage);
    };
    ChoicesPage.prototype.onShowImage = function (image, imgNum) {
        var imageModal = this.modalCtrl.create(ViewImagePage, { image: image, imgNum: imgNum });
        imageModal.present();
    };
    ChoicesPage.prototype.onGetChoices = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Fetching dilemmas...'
        });
        loading.present();
        this.storage.get('token').then(function (token) {
            _this.choiceProvider.getServerUserChoices(token)
                .subscribe(function (data) {
                // console.log(data)
                console.log('server storage');
                // console.log(choices)
                // console.log(choices)
                _this.choices = data;
                if (_this.choices.length == 0) {
                    _this.noChoices = true;
                    console.log(_this.noChoices);
                }
                _this.dataStorage.onStoreChoices(_this.choices);
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
    ChoicesPage.prototype.getChoices = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Fetching dilemmas...'
        });
        loading.present();
        this.dataStorage.onGetChoices()
            .then(function (choices) {
            if (!(choices == null)) {
                _this.choices = choices;
                if (_this.choices.length == 0) {
                    _this.noChoices = true;
                }
                loading.dismiss();
                console.log('local storage');
                console.log(choices);
                return _this.choices.slice();
            }
            else {
                _this.storage.get('token').then(function (token) {
                    _this.choiceProvider.getServerUserChoices(token)
                        .subscribe(function (data) {
                        // console.log(data)
                        console.log('server storage');
                        console.log(choices);
                        _this.choices = data;
                        if (_this.choices.length == 0) {
                            _this.noChoices = true;
                        }
                        _this.dataStorage.onStoreChoices(_this.choices);
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
    ChoicesPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-choices',
                    templateUrl: 'choices.html',
                },] },
    ];
    /** @nocollapse */
    ChoicesPage.ctorParameters = function () { return [
        { type: AlertController, },
        { type: DataStorageProvider, },
        { type: Storage, },
        { type: LoadingController, },
        { type: ModalController, },
        { type: ChoiceProvider, },
        { type: NavController, },
        { type: NavParams, },
    ]; };
    return ChoicesPage;
}());
export { ChoicesPage };
//# sourceMappingURL=choices.js.map