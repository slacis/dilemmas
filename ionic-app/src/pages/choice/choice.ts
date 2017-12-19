import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {ChoiceProvider} from "../../providers/choice/choice";
import {Choice} from "../../models/choice.model";
import {Storage} from "@ionic/storage"
import 'rxjs/Rx';
import {ViewImagePage} from "../view-image/view-image";

// @IonicPage()
@Component({
  selector: 'page-choice',
  templateUrl: 'choice.html',
})
export class ChoicePage{
  choices: Choice[] = [];
  choice: Choice;
  loaded = false;
  noChoices = false;
  decisions = []
  constructor(
    public modalCtrl: ModalController,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public choiceProvider: ChoiceProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
  if (this.choices.length == 0) {
    this.onGetChoices()
  }

  }

  onMakeDecision(choice, decision) {
    this.nextChoice();
    this.decisions.push({'choice': choice, 'decision': decision})
  }

  nextChoice() {
    if (this.choices.length == 0) {
      this.onGetChoices()
    } else {
      let ran = Math.floor(Math.random() * this.choices.length)
      this.choice = this.choices[ran]
      this.choices.splice(ran, 1)
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoicePage');
  }

  onShowImage(image, imgNum){
    let imageModal = this.modalCtrl.create(ViewImagePage, { image: image, imgNum: imgNum });
    imageModal.present();
  }

  onGetChoices(){
    const loading = this.loadingCtrl.create({
      content: 'Fetching dilemmas...'
    });
    loading.present();
    this.storage.get('token').then(
      token => {
        if (this.decisions.length != 0){
          this.choiceProvider.makeDecision(this.decisions, token)
            .subscribe(
              response => {
                console.log(response)
                // We must wait for the decisions to be added to the database before fetching more dilemmas
                this.decisions = []
                return this.choiceProvider.getRandomChoices(token)
                  .subscribe(
                    (choices: Choice[]) => {
                      this.choices = choices
                      console.log(this.choices)
                      if (choices.length != 0) {
                        this.nextChoice()
                      } else {
                        this.noChoices = true;
                      }
                      this.loaded = true;
                      loading.dismiss()
                    }
                  )
              }
            )
        } else {
          return this.choiceProvider.getRandomChoices(token)
            .subscribe(
              (choices: Choice[]) => {
                this.choices = choices
                console.log(this.choices)
                if (choices.length != 0) {
                  this.nextChoice()
                } else {
                  this.noChoices = true;
                }
                this.loaded = true;
                loading.dismiss()
              }
            )
        }

      }
    )
  }




}
