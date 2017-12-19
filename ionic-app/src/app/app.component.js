import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { AuthProvider } from "../providers/auth/auth";
var MyApp = (function () {
    function MyApp(menuCtrl, authProvider, platform, statusBar, splashScreen) {
        this.menuCtrl = menuCtrl;
        this.authProvider = authProvider;
        this.rootPage = LoginPage;
        this.loginPage = LoginPage;
        this.signupPage = SignupPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.onLoad = function (page) {
        this.nav.setRoot(page);
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