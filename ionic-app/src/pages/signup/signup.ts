import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AuthProvider} from "../../providers/auth/auth";
import {HttpErrorResponse} from "@angular/common/http";
import {LoginPage} from "../login/login";
import {TabsPage} from "../tabs/tabs";
import {Storage} from "@ionic/storage"

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user = {
    username: String,
    password: String
  }
  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private authProvider: AuthProvider,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  onSignup(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up...'
    });
    loading.present();
    this.user.username = form.value.email;
    this.user.password =  form.value.password;
    this.authProvider.signupUser(this.user)
      .subscribe(
        data => {
          console.log(data)
          loading.dismiss();
          if (data['success'] == true) {
            this.onSignin(this.user)
          } else {
            const alert = this.alertCtrl.create({
              title: 'Registration failed!',
              message: 'This username already exists!',
              buttons: ['Ok']
            });
            alert.present();
          }
        },
        (err: HttpErrorResponse) => {
          loading.dismiss();
          const alert = this.alertCtrl.create({
            title: 'Registration failed!',
            message: err.error.message,
            buttons: ['Ok']
          });
          alert.present();
        });
  }

  onSignin(user) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    loading.present();
    this.authProvider.loginUser(user)
      .subscribe(
        data => {
          console.log(data)
          this.storage.set('token', data['token'])
          this.storage.set('currentUser', user.username)
          loading.dismiss();
          const alert = this.alertCtrl.create({
            title: 'Registration complete!',
            message: 'Successfully registered and signed in!',
            buttons: [{
              text: 'Ok',
              handler: () => {
                this.navCtrl.setRoot(TabsPage)
              }
            }]
          });
          alert.present();
        },
        (err: HttpErrorResponse) => {
          loading.dismiss();
          const alert = this.alertCtrl.create({
            title: 'Signin failed!',
            message: err.error.message,
            buttons: ['Ok']
          });
          alert.present();
        });
  }
  onLogin(){
    this.navCtrl.push(LoginPage)
  }
}
