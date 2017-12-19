import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-view-image',
  templateUrl: 'view-image.html',
})
export class ViewImagePage {
  image
  imgNum
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image = this.navParams.get('image')
    this.imgNum = this.navParams.get('imgNum')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewImagePage');
  }

}
