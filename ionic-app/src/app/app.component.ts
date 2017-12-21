import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {LoginPage} from "../pages/login/login";
import {SignupPage} from "../pages/signup/signup";
import {AuthProvider} from "../providers/auth/auth";
import {Storage} from "@ionic/storage";
import {FriendsPage} from "../pages/friends/friends";
import {RequestTabsPage} from "../pages/request-tabs/request-tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  loginPage = LoginPage;
  signupPage = SignupPage;
  friendsPage = FriendsPage;
  requestTabsPage = RequestTabsPage;


  @ViewChild('nav') nav: NavController;
  constructor(
    private storage: Storage,
    private menuCtrl: MenuController,
    private authProvider: AuthProvider,
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.storage.get('token')
      .then(
        token => {
          if (token == null) {
            return false;
          } else {
            this.authProvider.isAuthenticated(token)
              .subscribe(
                authenticated => {
                  if (authenticated['isAuthenticated']) {
                    this.rootPage = TabsPage;
                  } else {
                    this.rootPage = LoginPage;
                  }
                }
              )
          }
        }
      )

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.push(page);
    this.menuCtrl.close();
  }

  onLogout() {
    // this.authProvider.logout();
    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
  }
}

