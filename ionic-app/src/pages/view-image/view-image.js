import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ViewImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var ViewImagePage = (function () {
    function ViewImagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.image = this.navParams.get('image');
        this.imgNum = this.navParams.get('imgNum');
    }
    ViewImagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewImagePage');
    };
    ViewImagePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-view-image',
                    templateUrl: 'view-image.html',
                },] },
    ];
    /** @nocollapse */
    ViewImagePage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
    ]; };
    return ViewImagePage;
}());
export { ViewImagePage };
//# sourceMappingURL=view-image.js.map