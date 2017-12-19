var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActionSheetController, AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Camera } from "@ionic-native/camera";
import { ImagePicker } from "@ionic-native/image-picker";
import { ChoiceProvider } from "../../providers/choice/choice";
import { Storage } from "@ionic/storage";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { ViewImagePage } from "../view-image/view-image";
var AddChoicePage = (function () {
    function AddChoicePage(modalCtrl, alertCtrl, storage, loadingCtrl, choiceProvider, imagePicker, toastCtrl, camera, actionSheetController, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.choiceProvider = choiceProvider;
        this.imagePicker = imagePicker;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photoOne = null;
        this.photoTwo = null;
    }
    AddChoicePage.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    AddChoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddChoicePage');
    };
    AddChoicePage.prototype.initializeForm = function () {
        var description = null;
        var choiceOne = 'Yes';
        var choiceTwo = 'No';
        this.choiceForm = new FormGroup({
            'description': new FormControl(description, Validators.required),
            'choiceOne': new FormControl(choiceOne, Validators.required),
            'choiceTwo': new FormControl(choiceTwo, Validators.required),
        });
    };
    AddChoicePage.prototype.onTakePhoto = function (mode) {
        var _this = this;
        var actionSheet = this.actionSheetController.create({
            title: 'Photo Location',
            buttons: [
                {
                    text: 'Photo from Camera',
                    handler: function () {
                        if (mode === 'one') {
                            _this.photoOne = _this.onGetPhoto('camera');
                            _this.photoOne.then(function (data) {
                                _this.base64ImageOne = 'data:image/jpeg;base64,' + data;
                            }).catch(function (err) { return _this.onPhotoError(err); });
                        }
                        else {
                            _this.photoTwo = _this.onGetPhoto('camera');
                            _this.photoTwo.then(function (data) {
                                _this.base64ImageTwo = 'data:image/jpeg;base64,' + data;
                            }).catch(function (err) { return _this.onPhotoError(err); });
                        }
                    }
                },
                {
                    text: 'Photo from Gallery',
                    handler: function () {
                        if (mode === 'one') {
                            _this.photoOne = _this.onGetPhoto('photolibrary');
                            _this.photoOne.then(function (data) {
                                _this.base64ImageOne = 'data:image/jpeg;base64,' + data;
                            }).catch(function (err) { return _this.onPhotoError(err); });
                        }
                        else {
                            _this.photoTwo = _this.onGetPhoto('photolibrary');
                            _this.photoTwo.then(function (data) {
                                _this.base64ImageTwo = 'data:image/jpeg;base64,' + data;
                            }).catch(function (err) { return _this.onPhotoError(err); });
                        }
                    }
                },
            ]
        });
        actionSheet.present();
    };
    AddChoicePage.prototype.onSubmit = function () {
        var _this = this;
        var value = this.choiceForm.value;
        var loading = this.loadingCtrl.create({
            content: 'Creating dilemma...'
        });
        loading.present();
        this.storage.get('token').then(function (token) {
            if (_this.photoOne != null && _this.photoTwo != null) {
                Observable.forkJoin([_this.photoOne, _this.photoTwo])
                    .subscribe(function (response) {
                    _this.base64ImageOne = 'data:image/jpeg;base64,' + response[0];
                    _this.base64ImageTwo = 'data:image/jpeg;base64,' + response[1];
                    console.log(response[0], response[1]);
                    _this.choiceProvider.addChoice('0', value.description, value.choiceOne, value.choiceTwo, _this.base64ImageOne, _this.base64ImageTwo, false, token)
                        .subscribe(function (data) {
                        console.log(data);
                        loading.dismiss();
                    }, function (err) {
                        loading.dismiss();
                        var alert = _this.alertCtrl.create({
                            title: 'Choice creation failed!',
                            message: err.message,
                            buttons: ['Ok']
                        });
                        alert.present();
                    });
                });
            }
            else {
                _this.choiceProvider.addChoice('0', value.description, value.choiceOne, value.choiceTwo, '0', '0', false, token)
                    .subscribe(function (data) {
                    console.log(data);
                    loading.dismiss();
                }, function (err) {
                    loading.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: 'Choice creation failed!',
                        message: err.message,
                        buttons: ['Ok']
                    });
                    alert.present();
                });
            }
        });
        this.choiceForm.reset();
        this.base64ImageTwo = '';
        this.base64ImageOne = '';
        this.navCtrl.popToRoot();
    };
    //   Helper function to convert uri to base64
    // Probably doesn't belong in this file
    //   Helper function to convert uri to base64
    // Probably doesn't belong in this file
    AddChoicePage.prototype.encodeImageUri = 
    //   Helper function to convert uri to base64
    // Probably doesn't belong in this file
    function (imageUri) {
        var c = document.createElement('canvas');
        var ctx = c.getContext("2d");
        var img = new Image();
        img.onload = function () {
            c.width = this.width;
            c.height = this.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = imageUri;
        var dataURL = c.toDataURL("image/jpeg");
        return dataURL;
    };
    AddChoicePage.prototype.onGetPhoto = function (source) {
        if (source === 'photolibrary') {
            return this.camera.getPicture({
                quality: 30,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                correctOrientation: true
            });
        }
        else if (source === 'camera') {
            return this.camera.getPicture({
                quality: 30,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.CAMERA,
                correctOrientation: true
            });
        }
    };
    AddChoicePage.prototype.onPhotoError = function (err) {
        {
            console.log(err);
            var toast = this.toastCtrl.create({
                message: 'Could not take image. Please try again',
                duration: 2500
            });
            toast.present();
        }
    };
    AddChoicePage.prototype.onShowImage = function (image, imgNum) {
        var imageModal = this.modalCtrl.create(ViewImagePage, { image: image, imgNum: imgNum });
        imageModal.present();
    };
    AddChoicePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-add-choice',
                    templateUrl: 'add-choice.html',
                },] },
    ];
    /** @nocollapse */
    AddChoicePage.ctorParameters = function () { return [
        { type: ModalController, },
        { type: AlertController, },
        { type: Storage, },
        { type: LoadingController, },
        { type: ChoiceProvider, },
        { type: ImagePicker, },
        { type: ToastController, },
        { type: Camera, },
        { type: ActionSheetController, },
        { type: NavController, },
        { type: NavParams, },
    ]; };
    AddChoicePage = __decorate([
        IonicPage(),
        __metadata("design:paramtypes", [ModalController,
            AlertController,
            Storage,
            LoadingController,
            ChoiceProvider,
            ImagePicker,
            ToastController,
            Camera,
            ActionSheetController,
            NavController, NavParams])
    ], AddChoicePage);
    return AddChoicePage;
}());
export { AddChoicePage };
//# sourceMappingURL=add-choice.js.map