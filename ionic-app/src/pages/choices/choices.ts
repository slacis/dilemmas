import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {AddChoicePage} from "../add-choice/add-choice";
import {Choice} from "../../models/choice.model";
import {ChoiceProvider} from "../../providers/choice/choice";
import {ViewImagePage} from "../view-image/view-image";
import {Storage} from "@ionic/storage"
import {DataStorageProvider} from "../../providers/data-storage/data-storage";


// @IonicPage()
@Component({
  selector: 'page-choices',
  templateUrl: 'choices.html',
})
export class ChoicesPage {
  noChoices = false;
  ViewImage = ViewImagePage;
  choices: Choice[] = [];
  constructor(
    private alertCtrl: AlertController,
    private dataStorage: DataStorageProvider,
    private storage: Storage,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private choiceProvider: ChoiceProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoicesPage');
  }

  ionViewWillEnter() {
    this.noChoices = false;
    if (this.choiceProvider.reload == true){
      this.onGetChoices()
      this.choiceProvider.reload = false
    }
    else {
      this.getChoices();
    }
    // console.log(this.choices)
  }

  onNewChoice() {
    this.navCtrl.push(AddChoicePage)
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
        this.choiceProvider.getServerUserChoices(token)
          .subscribe(
            (data: Choice[]) => {
              // console.log(data)
              console.log('server storage');
              // console.log(choices)
              this.choices = data;
              if (this.choices.length == 0) {
                this.noChoices = true;
                console.log(this.noChoices)
              }
              this.dataStorage.onStoreChoices(this.choices);
              loading.dismiss()
              // return this.choices.slice()
            },
            err => {
              loading.dismiss();
              const alert = this.alertCtrl.create({
                title: 'Unable to load dilemmas!',
                message: err.error.message,
                buttons: ['Ok']
              });
              console.log(err)
              alert.present();
        }
            )
      })
  }

  getChoices() {
    const loading = this.loadingCtrl.create({
      content: 'Fetching dilemmas...'
    });
    loading.present();
    this.dataStorage.onGetChoices()
      .then(
        (choices: Choice[]) => {
          if (!(choices == null)) {
            this.choices = choices;
            if (this.choices.length == 0) {
              this.noChoices = true;
            }
            loading.dismiss();
            console.log('local storage');
            console.log(choices);
            return this.choices.slice()
          } else {
            this.storage.get('token').then(
              token => {
                this.choiceProvider.getServerUserChoices(token)
                  .subscribe(
                    (data: Choice[]) => {
                      // console.log(data)
                      console.log('server storage')
                      console.log(choices)
                      this.choices = data;
                      if (this.choices.length == 0) {
                        this.noChoices = true;
                      }
                      this.dataStorage.onStoreChoices(this.choices)
                      loading.dismiss()
                      // return this.choices.slice()
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
                    })
              })
          }
        }
    )
  }


}
