import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {ChoiceProvider} from "../../providers/choice/choice";
import {Choice} from "../../models/choice.model";
import {Storage} from "@ionic/storage";
// import 'rxjs/Rx';
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
  mode = 'friends'
  constructor(
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public choiceProvider: ChoiceProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
  if (this.choices.length == 0) {
    this.onGetChoices()
  } else {
    this.noChoices = false;
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
      console.log(this.choices[ran])
      this.choice = this.choices[ran];
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
                console.log(response);
                // We must wait for the decisions to be added to the database before fetching more dilemmas
                this.decisions = [];
                return this.choiceProvider.getRandomChoices(token, this.mode)
                  .subscribe(
                    (choices: Choice[]) => {
                      this.choices = choices
                      console.log(this.choices)
                      if (choices.length != 0) {
                        this.nextChoice()
                        this.noChoices = false;
                      } else {
                        this.noChoices = true;
                      }
                      this.loaded = true;
                      loading.dismiss()
                    },
                    err => {
                      loading.dismiss()
                      const alert = this.alertCtrl.create({
                        title: 'Unable to load dilemmas!',
                        message: err.error.message,
                        buttons: ['Ok']
                      });
                      console.log(err)
                      alert.present();
                    }
                  )
              }
            )
        } else {
          return this.choiceProvider.getRandomChoices(token, this.mode)
            .subscribe(
              (choices: Choice[]) => {
                this.choices = choices;
                console.log(this.choices);
                if (choices.length != 0) {
                  this.nextChoice()
                  this.noChoices = false;
                } else {
                  this.noChoices = true;
                }
                this.loaded = true;
                loading.dismiss()
              },
              err => {
                loading.dismiss()
                const alert = this.alertCtrl.create({
                  title: 'Unable to load dilemmas!',
                  message: err.error.message,
                  buttons: ['Ok']
                });
                console.log(err)
                alert.present();
              }
            )
        }

      }
    )
  }


  segmentChanged(){
    this.onGetChoices()
  }




}
