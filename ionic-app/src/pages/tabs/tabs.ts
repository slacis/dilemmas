import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChoicePage} from "../choice/choice";
import {ChoicesPage} from "../choices/choices";


// @IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Choice = ChoicePage;
  Choices = ChoicesPage;
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
