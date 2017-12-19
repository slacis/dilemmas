import {Component} from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
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
  ViewImage = ViewImagePage;
  choices: Choice[] = [];
  constructor(
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
              console.log('server storage')
              // console.log(choices)
              this.choices = data
              this.dataStorage.onStoreChoices(this.choices)
              loading.dismiss()
              // return this.choices.slice()
            })
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
            this.choices = choices
            loading.dismiss()
            console.log('local storage')
            console.log(choices)
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
                      this.choices = data
                      this.dataStorage.onStoreChoices(this.choices)
                      loading.dismiss()
                      // return this.choices.slice()
                    })
              })
          }
        }
    )
  }


}
