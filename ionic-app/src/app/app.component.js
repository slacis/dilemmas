import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { AuthProvider } from "../providers/auth/auth";
import { Storage } from "@ionic/storage";
import { FriendsPage } from "../pages/friends/friends";
import { RequestTabsPage } from "../pages/request-tabs/request-tabs";
var MyApp = (function () {
    function MyApp(storage, menuCtrl, authProvider, platform, statusBar, splashScreen) {
        var _this = this;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.authProvider = authProvider;
        this.rootPage = LoginPage;
        this.loginPage = LoginPage;
        this.signupPage = SignupPage;
        this.friendsPage = FriendsPage;
        this.requestTabsPage = RequestTabsPage;
        this.storage.get('token')
            .then(function (token) {
            if (token == null) {
                return false;
            }
            else {
                _this.authProvider.isAuthenticated(token)
                    .subscribe(function (authenticated) {
                    if (authenticated['isAuthenticated']) {
                        _this.rootPage = TabsPage;
                        _this.storage.get('currentUser')
                            .then(function (userName) {
                            _this.userName = userName;
                        });
                    }
                    else {
                        _this.rootPage = LoginPage;
                    }
                });
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.push(page);
        this.menuCtrl.close();
    };
    MyApp.prototype.onLogout = function () {
        // this.authProvider.logout();
        this.menuCtrl.close();
        this.nav.setRoot(LoginPage);
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = function () { return [
        { type: Storage, },
        { type: MenuController, },
        { type: AuthProvider, },
        { type: Platform, },
        { type: StatusBar, },
        { type: SplashScreen, },
    ]; };
    MyApp.propDecorators = {
        "nav": [{ type: ViewChild, args: ['nav',] },],
    };
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map