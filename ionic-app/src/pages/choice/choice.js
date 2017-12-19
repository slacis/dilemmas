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
import { ChoiceProvider } from "../../providers/choice/choice";
import { Storage } from "@ionic/storage";
import 'rxjs/Rx';
import { ViewImagePage } from "../view-image/view-image";
var ChoicePage = (function () {
    function ChoicePage(modalCtrl, storage, loadingCtrl, choiceProvider, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.choiceProvider = choiceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.choices = [];
        this.loaded = false;
        this.noChoices = false;
        this.decisions = [];
    }
    ChoicePage.prototype.ionViewWillEnter = function () {
        if (this.choices.length == 0) {
            this.onGetChoices();
        }
    };
    ChoicePage.prototype.onMakeDecision = function (choice, decision) {
        this.nextChoice();
        this.decisions.push({ 'choice': choice, 'decision': decision });
    };
    ChoicePage.prototype.nextChoice = function () {
        if (this.choices.length == 0) {
            this.onGetChoices();
        }
        else {
            var ran = Math.floor(Math.random() * this.choices.length);
            this.choice = this.choices[ran];
            this.choices.splice(ran, 1);
        }
    };
    ChoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoicePage');
    };
    ChoicePage.prototype.onShowImage = function (image, imgNum) {
        var imageModal = this.modalCtrl.create(ViewImagePage, { image: image, imgNum: imgNum });
        imageModal.present();
    };
    ChoicePage.prototype.onGetChoices = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Fetching dilemmas...'
        });
        loading.present();
        this.storage.get('token').then(function (token) {
            if (_this.decisions.length != 0) {
                _this.choiceProvider.makeDecision(_this.decisions, token)
                    .subscribe(function (response) {
                    console.log(response);
                    // We must wait for the decisions to be added to the database before fetching more dilemmas
                    return _this.choiceProvider.getRandomChoices(token)
                        .subscribe(function (choices) {
                        _this.choices = choices;
                        console.log(_this.choices);
                        if (choices.length != 0) {
                            _this.nextChoice();
                        }
                        else {
                            _this.noChoices = true;
                        }
                        _this.loaded = true;
                        loading.dismiss();
                    });
                });
            }
            else {
                return _this.choiceProvider.getRandomChoices(token)
                    .subscribe(function (choices) {
                    _this.choices = choices;
                    console.log(_this.choices);
                    if (choices.length != 0) {
                        _this.nextChoice();
                    }
                    else {
                        _this.noChoices = true;
                    }
                    _this.loaded = true;
                    loading.dismiss();
                });
            }
        });
    };
    ChoicePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-choice',
                    templateUrl: 'choice.html',
                },] },
    ];
    /** @nocollapse */
    ChoicePage.ctorParameters = function () { return [
        { type: ModalController, },
        { type: Storage, },
        { type: LoadingController, },
        { type: ChoiceProvider, },
        { type: NavController, },
        { type: NavParams, },
    ]; };
    ChoicePage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [ModalController,
            Storage,
            LoadingController,
            ChoiceProvider,
            NavController, NavParams])
    ], ChoicePage);
    return ChoicePage;
}());
export { ChoicePage };
//# sourceMappingURL=choice.js.map