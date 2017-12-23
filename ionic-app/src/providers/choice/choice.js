import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Choice } from "../../models/choice.model";
import { Storage } from "@ionic/storage";
// import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import { DataStorageProvider } from "../data-storage/data-storage";
import { LoadingController } from "ionic-angular";
// import * as globals from "../../app/shared/globals"
// import {Response} from '@angular/http';
var ChoiceProvider = (function () {
    function ChoiceProvider(loadingCtrl, dataStorage, storage, http) {
        this.loadingCtrl = loadingCtrl;
        this.dataStorage = dataStorage;
        this.storage = storage;
        this.http = http;
        // server = "http://10.0.2.2:5000"
        // server = "http://127.0.0.1:5000"
        this.server = "https://3zudaflf8b.execute-api.us-west-2.amazonaws.com/dev";
        this.choices = [];
        this.reload = false;
        console.log('Hello ChoiceProvider Provider');
    }
    ChoiceProvider.prototype.addChoice = function (choiceID, description, optionOne, optionTwo, base64ImageOne, base64ImageTwo, accepted, token) {
        console.log('base64: ');
        console.log(base64ImageTwo);
        var choice = new Choice(choiceID, description, optionOne, optionTwo, base64ImageOne, base64ImageTwo, accepted);
        this.choices.push(choice);
        return this.http.post(this.server + '/choices', choice, {
            headers: new HttpHeaders()
                .set('x-access-token', token)
                .set('Content-Type', "application/json")
                .set('Access-Control-Allow-Origin', '*')
        });
    };
    // getChoices() {
    //   const loading = this.loadingCtrl.create({
    //     content: 'Fetching dilemmas...'
    //   });
    //   loading.present();
    //   this.onGetLocalChoices().do(
    //     (choices) => {
    //       if (!choices.isUndefined) {
    //         this.choices = choices
    //         loading.dismiss()
    //         return this.choices.slice()
    //       } else {
    //         this.storage.get('token').then(
    //           token => {
    //             this.getServerUserChoices(token)
    //           })
    //       }
    //     }
    //   )
    // }
    // getChoices() {
    //   const loading = this.loadingCtrl.create({
    //     content: 'Fetching dilemmas...'
    //   });
    //   loading.present();
    //   this.onGetLocalChoices().do(
    //     (choices) => {
    //       if (!choices.isUndefined) {
    //         this.choices = choices
    //         loading.dismiss()
    //         return this.choices.slice()
    //       } else {
    //         this.storage.get('token').then(
    //           token => {
    //             this.getServerUserChoices(token)
    //           })
    //       }
    //     }
    //   )
    // }
    ChoiceProvider.prototype.getRandomChoices = 
    // getChoices() {
    //   const loading = this.loadingCtrl.create({
    //     content: 'Fetching dilemmas...'
    //   });
    //   loading.present();
    //   this.onGetLocalChoices().do(
    //     (choices) => {
    //       if (!choices.isUndefined) {
    //         this.choices = choices
    //         loading.dismiss()
    //         return this.choices.slice()
    //       } else {
    //         this.storage.get('token').then(
    //           token => {
    //             this.getServerUserChoices(token)
    //           })
    //       }
    //     }
    //   )
    // }
    function (token) {
        return this.http.get(this.server + '/random_choices', {
            headers: new HttpHeaders()
                .set('x-access-token', token)
                .set('Content-Type', "application/json")
                .set('Access-Control-Allow-Origin', '*')
        });
    };
    ChoiceProvider.prototype.makeDecision = function (decisions, token) {
        var payload = { 'choice': decisions };
        return this.http.post(this.server + '/user_made_choice', payload, {
            headers: new HttpHeaders()
                .set('x-access-token', token)
                .set('Content-Type', "application/json")
                .set('Access-Control-Allow-Origin', '*')
        });
    };
    ChoiceProvider.prototype.getServerUserChoices = function (token) {
        var _this = this;
        return this.http.get(this.server + '/choices', {
            headers: new HttpHeaders()
                .set('x-access-token', token)
                .set('Content-Type', "application/json")
                .set('Access-Control-Allow-Origin', '*')
        })
            .do(function (data) {
            console.log(data);
            _this.choices = data;
            _this.dataStorage.onStoreChoices(_this.choices);
            return _this.choices.slice();
        });
    };
    ChoiceProvider.prototype.onStoreLocalChoices = function () {
        this.dataStorage.onStoreChoices(this.choices);
    };
    ChoiceProvider.prototype.onGetReload = function () {
        return this.reload;
    };
    ChoiceProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ChoiceProvider.ctorParameters = function () { return [
        { type: LoadingController, },
        { type: DataStorageProvider, },
        { type: Storage, },
        { type: HttpClient, },
    ]; };
    return ChoiceProvider;
}());
export { ChoiceProvider };
//# sourceMappingURL=choice.js.map