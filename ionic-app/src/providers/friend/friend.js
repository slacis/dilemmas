import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataStorageProvider } from "../data-storage/data-storage";
var FriendProvider = (function () {
    function FriendProvider(dataStorage, http) {
        this.dataStorage = dataStorage;
        this.http = http;
        // server = "http://10.0.2.2:5000"
        // server = "http://127.0.0.1:5000"
        this.server = "https://3zudaflf8b.execute-api.us-west-2.amazonaws.com/dev";
        this.friends = [];
        this.reloadIncoming = false;
        this.reloadOutgoing = false;
        console.log('Hello FriendProvider Provider');
    }
    FriendProvider.prototype.getServerFriends = function (token) {
        var _this = this;
        return this.http.get(this.server + '/friend', {
            headers: new HttpHeaders()
                .set('x-access-token', token)
                .set('Content-Type', "application/json")
                .set('Access-Control-Allow-Origin', '*')
        })
            .do(function (data) {
            console.log(data);
            _this.friends = data;
            _this.dataStorage.onStoreFriends(_this.friends);
            return _this.friends.slice();
        });
    };
    FriendProvider.prototype.getIncomingFriendRequests = function (token) {
        return this.http.get(this.server + '/incoming_friend_requests', {
            headers: new HttpHeaders()
                .set('x-access-token', token)
                .set('Content-Type', "application/json")
                .set('Access-Control-Allow-Origin', '*')
        });
        // .do(
        //   (data: User[]) => {
        // console.log(data)
        // this.friends = data
        // this.dataStorage.onStoreFriends(this.friends)
        // return this.friends.slice()
        // })
    };
    FriendProvider.prototype.getOutgoingFriendRequests = function (token) {
        return this.http.get(this.server + '/outgoing_friend_requests', {
            headers: new HttpHeaders()
                .set('x-access-token', token)
                .set('Content-Type', "application/json")
                .set('Access-Control-Allow-Origin', '*')
        });
    };
    FriendProvider.prototype.onGetIncomingReload = function () {
        return this.reloadIncoming;
    };
    FriendProvider.prototype.onGetOutgoingReload = function () {
        return this.reloadOutgoing;
    };
    FriendProvider.prototype.onAcceptFriend = function (user_id, token) {
        var friend_id = { "user_id": user_id };
        return this.http.post(this.server + '/user_accepts_friend', friend_id, {
            headers: new HttpHeaders()
                .set('x-access-token', token)
                .set('Content-Type', "application/json")
                .set('Access-Control-Allow-Origin', '*')
        });
    };
    FriendProvider.prototype.onDeleteFriendRequest = function (user_id, token) {
        var friend_id = { "user_id": user_id };
        return this.http.post(this.server + '/friend_request', friend_id, {
            headers: new HttpHeaders()
                .set('x-access-token', token)
                .set('Content-Type', "application/json")
                .set('Access-Control-Allow-Origin', '*')
        });
    };
    FriendProvider.prototype.onAddFriend = function (username, token) {
        var friend_username = { "username": username };
        return this.http.post(this.server + '/user_adds_friend', friend_username, {
            headers: new HttpHeaders()
                .set('x-access-token', token)
                .set('Content-Type', "application/json")
                .set('Access-Control-Allow-Origin', '*')
        });
    };
    FriendProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FriendProvider.ctorParameters = function () { return [
        { type: DataStorageProvider, },
        { type: HttpClient, },
    ]; };
    return FriendProvider;
}());
export { FriendProvider };
//# sourceMappingURL=friend.js.map