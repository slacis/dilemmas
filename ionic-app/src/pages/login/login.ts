import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AuthProvider} from "../../providers/auth/auth";
import {HttpErrorResponse} from "@angular/common/http";
import {SignupPage} from "../signup/signup";
import {TabsPage} from "../tabs/tabs";
import { Storage } from '@ionic/storage';

// @IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
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

  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    loading.present();
    this.user.username = form.value.email;
    this.user.password =  form.value.password;
    this.authProvider.loginUser(this.user)
      .subscribe(
        data => {
          console.log(data)
          loading.dismiss();
          this.storage.set('token', data['token'])
          this.storage.set('currentUser', this.user.username)
          console.log(this.storage.get('token'))
          this.navCtrl.push(TabsPage)
        },
        (err: HttpErrorResponse) => {
          loading.dismiss();
          const alert = this.alertCtrl.create({
            title: 'Signin failed!',
            message: err.message,
            buttons: ['Ok']
          });
          alert.present();
        });
  }
  onSignUp(){
    this.navCtrl.push(SignupPage)
  }
}
