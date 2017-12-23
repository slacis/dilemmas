import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChoicePage } from "../choice/choice";
import { ChoicesPage } from "../choices/choices";
// @IonicPage()
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Choice = ChoicePage;
        this.Choices = ChoicesPage;
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-tabs',
                    templateUrl: 'tabs.html',
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
    ]; };
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map