import {Component, OnInit} from '@angular/core';
import {
  ActionSheetController, AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams,
  ToastController
} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Camera } from "@ionic-native/camera"
import {ImagePicker} from "@ionic-native/image-picker";
import {ChoiceProvider} from "../../providers/choice/choice";
import { Storage } from "@ionic/storage"
import {HttpErrorResponse} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';
import {ViewImagePage} from "../view-image/view-image";

declare var cordova: any;

// @IonicPage()
@Component({
  selector: 'page-add-choice',
  templateUrl: 'add-choice.html',
})
export class AddChoicePage implements OnInit {
  choiceForm: FormGroup;
  base64ImageOne: string;
  base64ImageTwo: string;
  photoOne = null;
  photoTwo = null;
  friendOnly = false;
  public reload = false;


  constructor(
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    private choiceProvider: ChoiceProvider,
    public imagePicker: ImagePicker,
    public toastCtrl: ToastController,
    public camera: Camera,
    public actionSheetController: ActionSheetController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddChoicePage');
  }

  private initializeForm() {
    let description  = null;
    let choiceOne  = 'Yes';
    let choiceTwo  = 'No';

    this.choiceForm = new FormGroup({
      'description': new FormControl(description, Validators.required),
      'choiceOne': new FormControl(choiceOne, Validators.required),
      'choiceTwo': new FormControl(choiceTwo, Validators.required),
    })
  }

  onTakePhoto(mode: String){
    const actionSheet = this.actionSheetController.create({
      title: 'Photo Location',
      buttons: [
        {
          text: 'Photo from Camera',
          handler: () => {
            if (mode === 'one') {
              this.photoOne = this.onGetPhoto('camera')
              this.photoOne.then(
                data => {
                  this.base64ImageOne = 'data:image/jpeg;base64,' + data;
                }).catch(
                err => this.onPhotoError(err)
              )
            } else {
              this.photoTwo = this.onGetPhoto('camera')
              this.photoTwo.then(
                data => {
                  this.base64ImageTwo = 'data:image/jpeg;base64,' + data;
                }).catch(
                err => this.onPhotoError(err)
              )
            }
          }
        },
        {
          text: 'Photo from Gallery',
          handler: () => {
            if (mode === 'one') {
              this.photoOne = this.onGetPhoto('photolibrary')
              this.photoOne.then(
                data => {
                  this.base64ImageOne = 'data:image/jpeg;base64,' + data;
                }).catch(
                err => this.onPhotoError(err)
              )
            } else {
              this.photoTwo = this.onGetPhoto('photolibrary')
              this.photoTwo.then(
                data => {
                  this.base64ImageTwo = 'data:image/jpeg;base64,' + data;
                }).catch(
                err => this.onPhotoError(err)
              )
            }
          }
        },
      ]
    });
    actionSheet.present();
  }

  onSubmit(){
    const value = this.choiceForm.value;
    const loading = this.loadingCtrl.create({
      content: 'Creating dilemma...'
    });
    loading.present();
    this.storage.get('token').then(
      token => {
        if (this.photoOne != null && this.photoTwo != null) {
          Observable.forkJoin([this.photoOne, this.photoTwo])
            .subscribe((response) => {
              this.base64ImageOne = 'data:image/jpeg;base64,' + response[0];
              this.base64ImageTwo = 'data:image/jpeg;base64,' + response[1];
              console.log(response[0], response[1]);
              this.choiceProvider.addChoice('0', value.description, value.choiceOne, value.choiceTwo, this.base64ImageOne, this.base64ImageTwo, false, this.friendOnly, token)
                .subscribe(
                  data => {
                    console.log(data)
                    loading.dismiss();
                    this.choiceProvider.reload = true
                    this.navCtrl.popToRoot();
                  },
                  (err: HttpErrorResponse) => {
                    loading.dismiss();
                    const alert = this.alertCtrl.create({
                      title: 'Choice creation failed!',
                      message: err.error.message,
                      buttons: ['Ok']
                    });
                    alert.present();
                  });
            });
        } else {
          this.choiceProvider.addChoice('0', value.description, value.choiceOne, value.choiceTwo, '0', '0', false, this.friendOnly, token)
            .subscribe(
              data => {
                console.log(data)
                loading.dismiss();
                this.choiceProvider.reload = true;
                this.navCtrl.popToRoot();
              },
              (err: HttpErrorResponse) => {
                loading.dismiss();
                const alert = this.alertCtrl.create({
                  title: 'Choice creation failed!',
                  message: err.error.message,
                  buttons: ['Ok']
                });
                alert.present();
              });
        }
      }
    );

    this.choiceForm.reset();
    this.base64ImageTwo = '';
    this.base64ImageOne = '';
  }


  //   Helper function to convert uri to base64
  // Probably doesn't belong in this file
  encodeImageUri(imageUri) {
    var c=(<HTMLCanvasElement>document.createElement('canvas'));
    var ctx=c.getContext("2d");
    var img=new Image();
    img.onload = function(){
      c.width=(<HTMLCanvasElement>this).width;
      c.height=(<HTMLCanvasElement>this).height;
      ctx.drawImage(img, 0,0);
    };
    img.src=imageUri;
    var dataURL = c.toDataURL("image/jpeg");
    return dataURL;
  }

  onGetPhoto(source) {
    if(source === 'photolibrary') {
      return this.camera.getPicture({
        quality: 20,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        correctOrientation: true
      })
    } else if (source ==='camera'){
      return this.camera.getPicture({
        quality: 20,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true
      })
    }
  }

  onPhotoError(err){
    {
      console.log(err)
      const toast = this.toastCtrl.create({
        message: 'Could not take image. Please try again',
        duration: 2500
      });
      toast.present()
    }
  }

  onShowImage(image, imgNum){
    let imageModal = this.modalCtrl.create(ViewImagePage, { image: image, imgNum: imgNum });
    imageModal.present();
  }


}
