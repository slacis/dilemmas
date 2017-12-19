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
import { AlertController, IonicPage, LoadingController, NavController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { SignupPage } from "../signup/signup";
import { TabsPage } from "../tabs/tabs";
import { Storage } from '@ionic/storage';
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
            console.log(_this.storage.get('token'));
            _this.navCtrl.push(TabsPage);
        }, function (err) {
            loading.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Signin failed!',
                message: err.message,
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
    LoginPage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [Storage,
            NavController,
            AuthProvider,
            LoadingController,
            AlertController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map