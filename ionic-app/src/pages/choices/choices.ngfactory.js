/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "ionic-angular/components/card/card";
import * as i2 from "ionic-angular/config/config";
import * as i3 from "ionic-angular/components/card/card-content";
import * as i4 from "ionic-angular/components/card/card-header";
import * as i5 from "ionic-angular/components/grid/row";
import * as i6 from "ionic-angular/components/grid/col";
import * as i7 from "../../../node_modules/ionic-angular/components/button/button.ngfactory";
import * as i8 from "ionic-angular/components/button/button";
import * as i9 from "ionic-angular/components/icon/icon";
import * as i10 from "ionic-angular/components/note/note";
import * as i11 from "@angular/common";
import * as i12 from "ionic-angular/components/toolbar/toolbar-header";
import * as i13 from "ionic-angular/navigation/view-controller";
import * as i14 from "../../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory";
import * as i15 from "ionic-angular/components/toolbar/navbar";
import * as i16 from "ionic-angular/components/app/app";
import * as i17 from "ionic-angular/navigation/nav-controller";
import * as i18 from "ionic-angular/components/toolbar/toolbar-item";
import * as i19 from "ionic-angular/components/toolbar/toolbar";
import * as i20 from "ionic-angular/components/menu/menu-toggle";
import * as i21 from "ionic-angular/components/app/menu-controller";
import * as i22 from "../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory";
import * as i23 from "ionic-angular/components/toolbar/toolbar-title";
import * as i24 from "../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i25 from "ionic-angular/components/content/content";
import * as i26 from "ionic-angular/platform/platform";
import * as i27 from "ionic-angular/platform/dom-controller";
import * as i28 from "ionic-angular/platform/keyboard";
import * as i29 from "./choices";
import * as i30 from "@ionic/storage/dist/storage";
import * as i31 from "ionic-angular/components/loading/loading-controller";
import * as i32 from "ionic-angular/components/modal/modal-controller";
import * as i33 from "../../providers/choice/choice";
import * as i34 from "ionic-angular/navigation/nav-params";
var styles_ChoicesPage = [];
var RenderType_ChoicesPage = i0.ɵcrt({ encapsulation: 2, styles: styles_ChoicesPage, data: {} });
export { RenderType_ChoicesPage as RenderType_ChoicesPage };
function View_ChoicesPage_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 70, "ion-card", [], null, null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i1.Card, [i2.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, null, ["\n\n    "])), (_l()(), i0.ɵeld(3, 0, null, null, 9, "ion-card-content", [["text-center", ""]], null, null, null, null, null)), i0.ɵdid(4, 16384, null, 0, i3.CardContent, [i2.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(6, 0, null, null, 2, "ion-card-header", [], null, null, null, null, null)), i0.ɵdid(7, 16384, null, 0, i4.CardHeader, [i2.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, null, ["\n        Dilemma:\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(10, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(11, null, [" ", ""])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n\n    "])), (_l()(), i0.ɵeld(14, 0, null, null, 42, "ion-row", [["class", "row"]], null, null, null, null, null)), i0.ɵdid(15, 16384, null, 0, i5.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(17, 0, null, null, 18, "ion-col", [["class", "col"], ["col-6", ""], ["text-center", ""]], null, null, null, null, null)), i0.ɵdid(18, 16384, null, 0, i6.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(20, 0, null, null, 0, "img", [], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onShowImage(_v.context.$implicit.base64ImageOne, 1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(22, 0, null, null, 8, "button", [["clear", ""], ["icon-left", ""], ["ion-button", ""], ["small", ""]], null, null, null, i7.View_Button_0, i7.RenderType_Button)), i0.ɵdid(23, 1097728, null, 0, i8.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], { small: [0, "small"], clear: [1, "clear"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n          "])), (_l()(), i0.ɵeld(25, 0, null, 0, 1, "ion-icon", [["name", "thumbs-up"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(26, 147456, null, 0, i9.Icon, [i2.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n          "])), (_l()(), i0.ɵeld(28, 0, null, 0, 1, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(29, null, ["", ""])), (_l()(), i0.ɵted(-1, 0, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(32, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(33, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), i0.ɵted(34, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(37, 0, null, null, 18, "ion-col", [["class", "col"], ["col-6", ""], ["text-center", ""]], null, null, null, null, null)), i0.ɵdid(38, 16384, null, 0, i6.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(40, 0, null, null, 0, "img", [], [[8, "src", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onShowImage(_v.context.$implicit.base64ImageTwo, 2) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(42, 0, null, null, 8, "button", [["clear", ""], ["icon-left", ""], ["ion-button", ""], ["small", ""]], null, null, null, i7.View_Button_0, i7.RenderType_Button)), i0.ɵdid(43, 1097728, null, 0, i8.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], { small: [0, "small"], clear: [1, "clear"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n          "])), (_l()(), i0.ɵeld(45, 0, null, 0, 1, "ion-icon", [["name", "thumbs-up"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(46, 147456, null, 0, i9.Icon, [i2.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n          "])), (_l()(), i0.ɵeld(48, 0, null, 0, 1, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(49, null, ["", ""])), (_l()(), i0.ɵted(-1, 0, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(52, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(53, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), i0.ɵted(54, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(58, 0, null, null, 11, "ion-row", [["class", "row"]], null, null, null, null, null)), i0.ɵdid(59, 16384, null, 0, i5.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(61, 0, null, null, 7, "ion-col", [["center", ""], ["class", "col"], ["text-center", ""]], null, null, null, null, null)), i0.ɵdid(62, 16384, null, 0, i6.Col, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(64, 0, null, null, 3, "ion-note", [], null, null, null, null, null)), i0.ɵdid(65, 16384, null, 0, i10.Note, [i2.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(66, null, ["\n          ", "\n        "])), i0.ɵppd(67, 2), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n\n  "]))], function (_ck, _v) { var currVal_2 = ""; var currVal_3 = ""; _ck(_v, 23, 0, currVal_2, currVal_3); var currVal_5 = "thumbs-up"; _ck(_v, 26, 0, currVal_5); var currVal_9 = ""; var currVal_10 = ""; _ck(_v, 43, 0, currVal_9, currVal_10); var currVal_12 = "thumbs-up"; _ck(_v, 46, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.description; _ck(_v, 11, 0, currVal_0); var currVal_1 = _v.context.$implicit.base64ImageOne; _ck(_v, 20, 0, currVal_1); var currVal_4 = i0.ɵnov(_v, 26)._hidden; _ck(_v, 25, 0, currVal_4); var currVal_6 = _v.context.$implicit.optionOneScore; _ck(_v, 29, 0, currVal_6); var currVal_7 = _v.context.$implicit.optionOne; _ck(_v, 34, 0, currVal_7); var currVal_8 = _v.context.$implicit.base64ImageTwo; _ck(_v, 40, 0, currVal_8); var currVal_11 = i0.ɵnov(_v, 46)._hidden; _ck(_v, 45, 0, currVal_11); var currVal_13 = _v.context.$implicit.optionTwoScore; _ck(_v, 49, 0, currVal_13); var currVal_14 = _v.context.$implicit.optionTwo; _ck(_v, 54, 0, currVal_14); var currVal_15 = i0.ɵunv(_v, 66, 0, _ck(_v, 67, 0, i0.ɵnov(_v.parent, 0), _v.context.$implicit.timeStamp, "yyyy-MM-dd HH:mm:ss")); _ck(_v, 66, 0, currVal_15); }); }
export function View_ChoicesPage_0(_l) { return i0.ɵvid(0, [i0.ɵpid(0, i11.DatePipe, [i0.LOCALE_ID]), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(2, 0, null, null, 44, "ion-header", [], null, null, null, null, null)), i0.ɵdid(3, 16384, null, 0, i12.Header, [i2.Config, i0.ElementRef, i0.Renderer, [2, i13.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n\n  "])), (_l()(), i0.ɵeld(5, 0, null, null, 40, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i14.View_Navbar_0, i14.RenderType_Navbar)), i0.ɵdid(6, 49152, null, 0, i15.Navbar, [i16.App, [2, i13.ViewController], [2, i17.NavController], i2.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(8, 0, null, 1, 13, "ion-buttons", [["start", ""]], null, null, null, null, null)), i0.ɵdid(9, 16384, null, 1, i18.ToolbarItem, [i2.Config, i0.ElementRef, i0.Renderer, [2, i19.Toolbar], [2, i15.Navbar]], null, null), i0.ɵqud(603979776, 1, { _buttons: 1 }), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(12, 0, null, null, 8, "button", [["icon-only", ""], ["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 14).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i7.View_Button_0, i7.RenderType_Button)), i0.ɵdid(13, 1097728, [[2, 4], [1, 4]], 0, i8.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], null, null), i0.ɵdid(14, 1064960, null, 0, i20.MenuToggle, [i21.MenuController, [2, i13.ViewController], [2, i8.Button], [2, i15.Navbar]], { menuToggle: [0, "menuToggle"] }, null), i0.ɵdid(15, 16384, null, 1, i18.ToolbarItem, [i2.Config, i0.ElementRef, i0.Renderer, [2, i19.Toolbar], [2, i15.Navbar]], null, null), i0.ɵqud(603979776, 2, { _buttons: 1 }), (_l()(), i0.ɵted(-1, 0, ["\n        "])), (_l()(), i0.ɵeld(18, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(19, 147456, null, 0, i9.Icon, [i2.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(23, 0, null, 2, 17, "ion-buttons", [["end", ""]], null, null, null, null, null)), i0.ɵdid(24, 16384, null, 1, i18.ToolbarItem, [i2.Config, i0.ElementRef, i0.Renderer, [2, i19.Toolbar], [2, i15.Navbar]], null, null), i0.ɵqud(603979776, 3, { _buttons: 1 }), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(27, 0, null, null, 5, "button", [["icon-only", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onNewChoice() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i7.View_Button_0, i7.RenderType_Button)), i0.ɵdid(28, 1097728, [[3, 4]], 0, i8.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 0, ["\n        "])), (_l()(), i0.ɵeld(30, 0, null, 0, 1, "ion-icon", [["name", "add"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(31, 147456, null, 0, i9.Icon, [i2.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(34, 0, null, null, 5, "button", [["icon-only", ""], ["ion-button", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onGetChoices() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i7.View_Button_0, i7.RenderType_Button)), i0.ɵdid(35, 1097728, [[3, 4]], 0, i8.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 0, ["\n        "])), (_l()(), i0.ɵeld(37, 0, null, 0, 1, "ion-icon", [["name", "refresh"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(38, 147456, null, 0, i9.Icon, [i2.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵeld(42, 0, null, 3, 2, "ion-title", [], null, null, null, i22.View_ToolbarTitle_0, i22.RenderType_ToolbarTitle)), i0.ɵdid(43, 49152, null, 0, i23.ToolbarTitle, [i2.Config, i0.ElementRef, i0.Renderer, [2, i19.Toolbar], [2, i15.Navbar]], null, null), (_l()(), i0.ɵted(-1, 0, ["My Dilemmas"])), (_l()(), i0.ɵted(-1, 3, ["\n\n  "])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n\n"])), (_l()(), i0.ɵeld(48, 0, null, null, 5, "ion-content", [["class", "background-gradient"], ["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i24.View_Content_0, i24.RenderType_Content)), i0.ɵdid(49, 4374528, null, 0, i25.Content, [i2.Config, i26.Platform, i27.DomController, i0.ElementRef, i0.Renderer, i16.App, i28.Keyboard, i0.NgZone, [2, i13.ViewController], [2, i17.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n  "])), (_l()(), i0.ɵand(16777216, null, 1, 1, null, View_ChoicesPage_1)), i0.ɵdid(52, 802816, null, 0, i11.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, 1, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = ""; _ck(_v, 14, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 19, 0, currVal_5); var currVal_7 = "add"; _ck(_v, 31, 0, currVal_7); var currVal_9 = "refresh"; _ck(_v, 38, 0, currVal_9); var currVal_12 = _co.choices; _ck(_v, 52, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 6)._hidden; var currVal_1 = i0.ɵnov(_v, 6)._sbPadding; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 14).isHidden; _ck(_v, 12, 0, currVal_2); var currVal_4 = i0.ɵnov(_v, 19)._hidden; _ck(_v, 18, 0, currVal_4); var currVal_6 = i0.ɵnov(_v, 31)._hidden; _ck(_v, 30, 0, currVal_6); var currVal_8 = i0.ɵnov(_v, 38)._hidden; _ck(_v, 37, 0, currVal_8); var currVal_10 = i0.ɵnov(_v, 49).statusbarPadding; var currVal_11 = i0.ɵnov(_v, 49)._hasRefresher; _ck(_v, 48, 0, currVal_10, currVal_11); }); }
export function View_ChoicesPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-choices", [], null, null, null, View_ChoicesPage_0, RenderType_ChoicesPage)), i0.ɵdid(1, 49152, null, 0, i29.ChoicesPage, [i30.Storage, i31.LoadingController, i32.ModalController, i33.ChoiceProvider, i17.NavController, i34.NavParams], null, null)], null, null); }
var ChoicesPageNgFactory = i0.ɵccf("page-choices", i29.ChoicesPage, View_ChoicesPage_Host_0, {}, {}, []);
export { ChoicesPageNgFactory as ChoicesPageNgFactory };
//# sourceMappingURL=choices.ngfactory.js.map