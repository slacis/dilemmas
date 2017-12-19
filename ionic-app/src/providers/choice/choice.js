import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Choice } from "../../models/choice.model";
import { Storage } from "@ionic/storage";
import 'rxjs/Rx';
// import {Response} from '@angular/http';
var ChoiceProvider = (function () {
    function ChoiceProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        this.choices = [];
        // server = "http://10.0.2.2:5000"
        // server = "http://127.0.0.1:5000"
        this.server = "https://3zudaflf8b.execute-api.us-west-2.amazonaws.com/dev";
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
    ChoiceProvider.prototype.getChoices = function () {
        return this.choices.slice();
    };
    ChoiceProvider.prototype.getRandomChoices = function (token) {
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
    ChoiceProvider.prototype.getUserChoices = function (token) {
        return this.http.get(this.server + '/choices', {
            headers: new HttpHeaders()
                .set('x-access-token', token)
                .set('Content-Type', "application/json")
                .set('Access-Control-Allow-Origin', '*')
        });
    };
    ChoiceProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ChoiceProvider.ctorParameters = function () { return [
        { type: Storage, },
        { type: HttpClient, },
    ]; };
    return ChoiceProvider;
}());
export { ChoiceProvider };
//# sourceMappingURL=choice.js.map