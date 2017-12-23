import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { AuthProvider } from "../auth/auth";
/*
  Generated class for the DataStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataStorageProvider = (function () {
    function DataStorageProvider(authProvider, storage, http) {
        this.authProvider = authProvider;
        this.storage = storage;
        this.http = http;
        console.log('Hello DataStorageProvider Provider');
    }
    DataStorageProvider.prototype.onStoreChoices = function (choices) {
        var _this = this;
        var currentUser = this.storage.get('currentUser').then(function (userName) {
            _this.storage.set(userName + 'choices', choices);
        });
    };
    DataStorageProvider.prototype.onGetChoices = function () {
        var _this = this;
        return this.storage.get('currentUser').then(function (userName) {
            return _this.storage.get(userName + 'choices');
        });
    };
    DataStorageProvider.prototype.onStoreFriends = function (friends) {
        var _this = this;
        var currentUser = this.storage.get('currentUser').then(function (userName) {
            _this.storage.set(userName + 'friends', friends);
        });
    };
    DataStorageProvider.prototype.onGetFriends = function () {
        var _this = this;
        return this.storage.get('currentUser').then(function (userName) {
            return _this.storage.get(userName + 'friends');
        });
    };
    DataStorageProvider.prototype.onStoreIncomingFriendRequests = function (friends) {
        var _this = this;
        var currentUser = this.storage.get('currentUser').then(function (userName) {
            _this.storage.set(userName + 'incomingFriendRequests', friends);
        });
    };
    DataStorageProvider.prototype.onGetIncomingFriendRequests = function () {
        var _this = this;
        return this.storage.get('currentUser').then(function (userName) {
            return _this.storage.get(userName + 'incomingFriendRequests');
        });
    };
    DataStorageProvider.prototype.onStoreOutgoingFriendRequests = function (friends) {
        var _this = this;
        var currentUser = this.storage.get('currentUser').then(function (userName) {
            _this.storage.set(userName + 'outgoingFriendRequests', friends);
        });
    };
    DataStorageProvider.prototype.onGetOutgoingFriendRequests = function () {
        var _this = this;
        return this.storage.get('currentUser').then(function (userName) {
            return _this.storage.get(userName + 'outgoingFriendRequests');
        });
    };
    DataStorageProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DataStorageProvider.ctorParameters = function () { return [
        { type: AuthProvider, },
        { type: Storage, },
        { type: HttpClient, },
    ]; };
    return DataStorageProvider;
}());
export { DataStorageProvider };
//# sourceMappingURL=data-storage.js.map