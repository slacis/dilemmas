import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { SignupPage } from "../signup/signup";
import { TabsPage } from "../tabs/tabs";
import { Storage } from '@ionic/storage';
// @IonicPage()
var LoginPage = (function () {
    function LoginPage(storage, navCtrl, authProvider, loadingCtrl, alertCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.user = {
            username: String,
            password: String
        };
    }
    LoginPage.prototype.onSignin = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you in...'
        });
        loading.present();
        this.user.username = form.value.email;
        this.user.password = form.value.password;
        this.authProvider.loginUser(this.user)
            .subscribe(function (data) {
            console.log(data);
            loading.dismiss();
            _this.storage.set('token', data['token']);
            _this.storage.set('currentUser', _this.user.username);
            console.log(_this.storage.get('token'));
            _this.navCtrl.push(TabsPage);
        }, function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signin failed!',
                message: err.error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    LoginPage.prototype.onSignUp = function () {
        this.navCtrl.push(SignupPage);
    };
    LoginPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-login',
                    templateUrl: 'login.html',
                },] },
    ];
    /** @nocollapse */
    LoginPage.ctorParameters = function () { return [
        { type: Storage, },
        { type: NavController, },
        { type: AuthProvider, },
        { type: LoadingController, },
        { type: AlertController, },
    ]; };
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map