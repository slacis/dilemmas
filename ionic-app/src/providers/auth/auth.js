import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from "@ionic/storage";
// import * as globals from "../../app/shared/globals"
/*
 Generated class for the AuthProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var AuthProvider = (function () {
    function AuthProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        // server = "http://10.0.2.2:5000"
        // server = "http://127.0.0.1:5000"
        this.server = "https://3zudaflf8b.execute-api.us-west-2.amazonaws.com/dev";
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.loginUser = function (user) {
        console.log(user.username);
        return this.http.get(this.server + '/login', { headers: new HttpHeaders().set('Authorization', "Basic " + btoa(user.username + ":" + user.password)) });
    };
    AuthProvider.prototype.signupUser = function (user) {
        console.log(user.username);
        return this.http.post(this.server + '/user', user, {
            headers: new HttpHeaders()
                .set('Content-Type', "application/json")
                .set('Access-Control-Allow-Origin', '*')
        });
    };
    AuthProvider.prototype.logoutUser = function () {
        this.storage.remove('token');
    };
    AuthProvider.prototype.isAuthenticated = function (token) {
        return this.http.get(this.server + '/is_authenticated', {
            headers: new HttpHeaders()
                .set('x-access-token', token)
                .set('Content-Type', "application/json")
                .set('Access-Control-Allow-Origin', '*')
        });
    };
    AuthProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthProvider.ctorParameters = function () { return [
        { type: Storage, },
        { type: HttpClient, },
    ]; };
    return AuthProvider;
}());
export { AuthProvider };
//# sourceMappingURL=auth.js.map