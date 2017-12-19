var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, LoadingController, ModalController, NavController, NavParams } from 'ionic-angular';
import { AddChoicePage } from "../add-choice/add-choice";
import { ChoiceProvider } from "../../providers/choice/choice";
import { ViewImagePage } from "../view-image/view-image";
import { Storage } from "@ionic/storage";
var ChoicesPage = (function () {
    function ChoicesPage(storage, loadingCtrl, modalCtrl, choiceProvider, navCtrl, navParams) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.choiceProvider = choiceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ViewImage = ViewImagePage;
        this.choices = [];
    }
    ChoicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoicesPage');
    };
    ChoicesPage.prototype.ionViewWillEnter = function () {
        this.choices = this.choiceProvider.getChoices();
        console.log(this.choices);
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
            _this.choiceProvider.getUserChoices(token)
                .subscribe(function (data) {
                console.log(data);
                _this.choices = data;
                loading.dismiss();
            });
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
        { type: Storage, },
        { type: LoadingController, },
        { type: ModalController, },
        { type: ChoiceProvider, },
        { type: NavController, },
        { type: NavParams, },
    ]; };
    ChoicesPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [Storage,
            LoadingController,
            ModalController,
            ChoiceProvider,
            NavController, NavParams])
    ], ChoicesPage);
    return ChoicesPage;
}());
export { ChoicesPage };
//# sourceMappingURL=choices.js.map