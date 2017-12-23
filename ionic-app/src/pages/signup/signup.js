import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { LoginPage } from "../login/login";
import { TabsPage } from "../tabs/tabs";
import { Storage } from "@ionic/storage";
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var SignupPage = (function () {
    function SignupPage(storage, navCtrl, authProvider, loadingCtrl, alertCtrl) {
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
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you up...'
        });
        loading.present();
        this.user.username = form.value.email;
        this.user.password = form.value.password;
        this.authProvider.signupUser(this.user)
            .subscribe(function (data) {
            console.log(data);
            loading.dismiss();
            if (data['success'] == true) {
                _this.onSignin(_this.user);
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Registration failed!',
                    message: 'This username already exists!',
                    buttons: ['Ok']
                });
                alert_1.present();
            }
        }, function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Registration failed!',
                message: err.error.message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    SignupPage.prototype.onSignin = function (user) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Signing you in...'
        });
        loading.present();
        this.authProvider.loginUser(user)
            .subscribe(function (data) {
            console.log(data);
            _this.storage.set('token', data['token']);
            _this.storage.set('currentUser', user.username);
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Registration complete!',
                message: 'Successfully registered and signed in!',
                buttons: [{
                        text: 'Ok',
                        handler: function () {
                            _this.navCtrl.setRoot(TabsPage);
                        }
                    }]
            });
            alert.present();
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
    SignupPage.prototype.onLogin = function () {
        this.navCtrl.push(LoginPage);
    };
    SignupPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-signup',
                    templateUrl: 'signup.html',
                },] },
    ];
    /** @nocollapse */
    SignupPage.ctorParameters = function () { return [
        { type: Storage, },
        { type: NavController, },
        { type: AuthProvider, },
        { type: LoadingController, },
        { type: AlertController, },
    ]; };
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map
