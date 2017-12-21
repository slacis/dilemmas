/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "ionic-angular/components/toolbar/toolbar-header";
import * as i2 from "ionic-angular/config/config";
import * as i3 from "ionic-angular/navigation/view-controller";
import * as i4 from "../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i5 from "ionic-angular/components/content/content";
import * as i6 from "ionic-angular/platform/platform";
import * as i7 from "ionic-angular/platform/dom-controller";
import * as i8 from "ionic-angular/components/app/app";
import * as i9 from "ionic-angular/platform/keyboard";
import * as i10 from "ionic-angular/navigation/nav-controller";
import * as i11 from "@angular/forms";
import * as i12 from "../../../node_modules/ionic-angular/components/item/item.ngfactory";
import * as i13 from "ionic-angular/components/item/item";
import * as i14 from "ionic-angular/util/form";
import * as i15 from "ionic-angular/components/item/item-reorder";
import * as i16 from "ionic-angular/components/item/item-content";
import * as i17 from "ionic-angular/components/list/list";
import * as i18 from "ionic-angular/gestures/gesture-controller";
import * as i19 from "ionic-angular/components/label/label";
import * as i20 from "../../../node_modules/ionic-angular/components/input/input.ngfactory";
import * as i21 from "ionic-angular/components/input/input";
import * as i22 from "../../../node_modules/ionic-angular/components/button/button.ngfactory";
import * as i23 from "ionic-angular/components/button/button";
import * as i24 from "./login";
import * as i25 from "@ionic/storage/dist/storage";
import * as i26 from "../../providers/auth/auth";
import * as i27 from "ionic-angular/components/loading/loading-controller";
import * as i28 from "ionic-angular/components/alert/alert-controller";
var styles_LoginPage = [];
var RenderType_LoginPage = i0.ɵcrt({ encapsulation: 2, styles: styles_LoginPage, data: {} });
export { RenderType_LoginPage as RenderType_LoginPage };
export function View_LoginPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(1, 0, null, null, 10, "ion-header", [], null, null, null, null, null)), i0.ɵdid(2, 16384, null, 0, i1.Header, [i2.Config, i0.ElementRef, i0.Renderer, [2, i3.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n\n  "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵeld(13, 0, null, null, 81, "ion-content", [["class", "center-wrapper background-gradient"], ["padding", ""], ["text-center", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i4.View_Content_0, i4.RenderType_Content)), i0.ɵdid(14, 4374528, null, 0, i5.Content, [i2.Config, i6.Platform, i7.DomController, i0.ElementRef, i0.Renderer, i8.App, i9.Keyboard, i0.NgZone, [2, i3.ViewController], [2, i10.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n  "])), (_l()(), i0.ɵeld(16, 0, null, 1, 77, "span", [["class", "transparent-bg"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵeld(18, 0, null, null, 74, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (i0.ɵnov(_v, 20).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (i0.ɵnov(_v, 20).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSignin(i0.ɵnov(_v, 20)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵdid(19, 16384, null, 0, i11.ɵbf, [], null, null), i0.ɵdid(20, 4210688, [["f", 4]], 0, i11.NgForm, [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), i0.ɵprd(2048, null, i11.ControlContainer, null, [i11.NgForm]), i0.ɵdid(22, 16384, null, 0, i11.NgControlStatusGroup, [i11.ControlContainer], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(24, 0, null, null, 6, "ion-item", [["class", "dilemmas-logo item item-block"], ["text-center", ""]], null, null, null, i12.View_Item_0, i12.RenderType_Item)), i0.ɵdid(25, 1097728, null, 3, i13.Item, [i14.Form, i2.Config, i0.ElementRef, i0.Renderer, [2, i15.ItemReorder]], null, null), i0.ɵqud(335544320, 1, { contentLabel: 0 }), i0.ɵqud(603979776, 2, { _buttons: 1 }), i0.ɵqud(603979776, 3, { _icons: 1 }), i0.ɵdid(29, 16384, null, 0, i16.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["Dilemmas"])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(32, 0, null, null, 7, "ion-item", [["class", "item item-block"], ["no-lines", ""], ["style", "color: white"], ["text-center", ""]], null, null, null, i12.View_Item_0, i12.RenderType_Item)), i0.ɵdid(33, 1097728, null, 3, i13.Item, [i14.Form, i2.Config, i0.ElementRef, i0.Renderer, [2, i15.ItemReorder]], null, null), i0.ɵqud(335544320, 4, { contentLabel: 0 }), i0.ɵqud(603979776, 5, { _buttons: 1 }), i0.ɵqud(603979776, 6, { _icons: 1 }), i0.ɵdid(37, 16384, null, 0, i16.ItemContent, [], null, null), (_l()(), i0.ɵeld(38, 0, null, 2, 1, "strong", [], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Login"])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(41, 0, null, null, 42, "ion-list", [], null, null, null, null, null)), i0.ɵdid(42, 16384, null, 0, i17.List, [i2.Config, i0.ElementRef, i0.Renderer, i6.Platform, i18.GestureController, i7.DomController], null, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(44, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["style", "background-color: white"]], null, null, null, i12.View_Item_0, i12.RenderType_Item)), i0.ɵdid(45, 1097728, null, 3, i13.Item, [i14.Form, i2.Config, i0.ElementRef, i0.Renderer, [2, i15.ItemReorder]], null, null), i0.ɵqud(335544320, 7, { contentLabel: 0 }), i0.ɵqud(603979776, 8, { _buttons: 1 }), i0.ɵqud(603979776, 9, { _icons: 1 }), i0.ɵdid(49, 16384, null, 0, i16.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(51, 0, null, 1, 2, "ion-label", [["fixed", ""]], null, null, null, null, null)), i0.ɵdid(52, 16384, [[7, 4]], 0, i19.Label, [i2.Config, i0.ElementRef, i0.Renderer, [8, null], [8, null], [8, ""], [8, null]], null, null), (_l()(), i0.ɵted(-1, null, ["E-Mail"])), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(55, 0, null, 3, 6, "ion-input", [["name", "email"], ["ngModel", ""], ["required", ""], ["type", "email"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, i20.View_TextInput_0, i20.RenderType_TextInput)), i0.ɵdid(56, 16384, null, 0, i11.RequiredValidator, [], { required: [0, "required"] }, null), i0.ɵprd(1024, null, i11.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i11.RequiredValidator]), i0.ɵdid(58, 671744, null, 0, i11.NgModel, [[2, i11.ControlContainer], [2, i11.NG_VALIDATORS], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, null), i0.ɵprd(2048, null, i11.NgControl, null, [i11.NgModel]), i0.ɵdid(60, 16384, null, 0, i11.NgControlStatus, [i11.NgControl], null, null), i0.ɵdid(61, 5423104, null, 0, i21.TextInput, [i2.Config, i6.Platform, i14.Form, i8.App, i0.ElementRef, i0.Renderer, [2, i5.Content], [2, i13.Item], [2, i11.NgControl], i7.DomController], { type: [0, "type"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(64, 0, null, null, 18, "ion-item", [["class", "item item-block"], ["style", "background-color: white"]], null, null, null, i12.View_Item_0, i12.RenderType_Item)), i0.ɵdid(65, 1097728, null, 3, i13.Item, [i14.Form, i2.Config, i0.ElementRef, i0.Renderer, [2, i15.ItemReorder]], null, null), i0.ɵqud(335544320, 10, { contentLabel: 0 }), i0.ɵqud(603979776, 11, { _buttons: 1 }), i0.ɵqud(603979776, 12, { _icons: 1 }), i0.ɵdid(69, 16384, null, 0, i16.ItemContent, [], null, null), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(71, 0, null, 1, 2, "ion-label", [["fixed", ""]], null, null, null, null, null)), i0.ɵdid(72, 16384, [[10, 4]], 0, i19.Label, [i2.Config, i0.ElementRef, i0.Renderer, [8, null], [8, null], [8, ""], [8, null]], null, null), (_l()(), i0.ɵted(-1, null, ["Password"])), (_l()(), i0.ɵted(-1, 2, ["\n        "])), (_l()(), i0.ɵeld(75, 0, null, 3, 6, "ion-input", [["name", "password"], ["ngModel", ""], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, i20.View_TextInput_0, i20.RenderType_TextInput)), i0.ɵdid(76, 16384, null, 0, i11.RequiredValidator, [], { required: [0, "required"] }, null), i0.ɵprd(1024, null, i11.NG_VALIDATORS, function (p0_0) { return [p0_0]; }, [i11.RequiredValidator]), i0.ɵdid(78, 671744, null, 0, i11.NgModel, [[2, i11.ControlContainer], [2, i11.NG_VALIDATORS], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, null), i0.ɵprd(2048, null, i11.NgControl, null, [i11.NgModel]), i0.ɵdid(80, 16384, null, 0, i11.NgControlStatus, [i11.NgControl], null, null), i0.ɵdid(81, 5423104, null, 0, i21.TextInput, [i2.Config, i6.Platform, i14.Form, i8.App, i0.ElementRef, i0.Renderer, [2, i5.Content], [2, i13.Item], [2, i11.NgControl], i7.DomController], { type: [0, "type"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(85, 0, null, null, 2, "button", [["block", ""], ["ion-button", ""], ["type", "submit"]], [[8, "disabled", 0]], null, null, i22.View_Button_0, i22.RenderType_Button)), i0.ɵdid(86, 1097728, null, 0, i23.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], { block: [0, "block"] }, null), (_l()(), i0.ɵted(-1, 0, ["Login"])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(89, 0, null, null, 2, "button", [["full", ""], ["ion-button", ""], ["outline", ""], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSignUp() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i22.View_Button_0, i22.RenderType_Button)), i0.ɵdid(90, 1097728, null, 0, i23.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], { outline: [0, "outline"], full: [1, "full"] }, null), (_l()(), i0.ɵted(-1, 0, ["No Account? Sign up here!"])), (_l()(), i0.ɵted(-1, null, ["\n  "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, 1, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var currVal_17 = ""; _ck(_v, 56, 0, currVal_17); var currVal_18 = "email"; var currVal_19 = ""; _ck(_v, 58, 0, currVal_18, currVal_19); var currVal_20 = "email"; _ck(_v, 61, 0, currVal_20); var currVal_29 = ""; _ck(_v, 76, 0, currVal_29); var currVal_30 = "password"; var currVal_31 = ""; _ck(_v, 78, 0, currVal_30, currVal_31); var currVal_32 = "password"; _ck(_v, 81, 0, currVal_32); var currVal_34 = ""; _ck(_v, 86, 0, currVal_34); var currVal_35 = ""; var currVal_36 = ""; _ck(_v, 90, 0, currVal_35, currVal_36); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 14).statusbarPadding; var currVal_1 = i0.ɵnov(_v, 14)._hasRefresher; _ck(_v, 13, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 22).ngClassUntouched; var currVal_3 = i0.ɵnov(_v, 22).ngClassTouched; var currVal_4 = i0.ɵnov(_v, 22).ngClassPristine; var currVal_5 = i0.ɵnov(_v, 22).ngClassDirty; var currVal_6 = i0.ɵnov(_v, 22).ngClassValid; var currVal_7 = i0.ɵnov(_v, 22).ngClassInvalid; var currVal_8 = i0.ɵnov(_v, 22).ngClassPending; _ck(_v, 18, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_9 = (i0.ɵnov(_v, 56).required ? "" : null); var currVal_10 = i0.ɵnov(_v, 60).ngClassUntouched; var currVal_11 = i0.ɵnov(_v, 60).ngClassTouched; var currVal_12 = i0.ɵnov(_v, 60).ngClassPristine; var currVal_13 = i0.ɵnov(_v, 60).ngClassDirty; var currVal_14 = i0.ɵnov(_v, 60).ngClassValid; var currVal_15 = i0.ɵnov(_v, 60).ngClassInvalid; var currVal_16 = i0.ɵnov(_v, 60).ngClassPending; _ck(_v, 55, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_21 = (i0.ɵnov(_v, 76).required ? "" : null); var currVal_22 = i0.ɵnov(_v, 80).ngClassUntouched; var currVal_23 = i0.ɵnov(_v, 80).ngClassTouched; var currVal_24 = i0.ɵnov(_v, 80).ngClassPristine; var currVal_25 = i0.ɵnov(_v, 80).ngClassDirty; var currVal_26 = i0.ɵnov(_v, 80).ngClassValid; var currVal_27 = i0.ɵnov(_v, 80).ngClassInvalid; var currVal_28 = i0.ɵnov(_v, 80).ngClassPending; _ck(_v, 75, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_33 = !i0.ɵnov(_v, 20).valid; _ck(_v, 85, 0, currVal_33); }); }
export function View_LoginPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-login", [], null, null, null, View_LoginPage_0, RenderType_LoginPage)), i0.ɵdid(1, 49152, null, 0, i24.LoginPage, [i25.Storage, i10.NavController, i26.AuthProvider, i27.LoadingController, i28.AlertController], null, null)], null, null); }
var LoginPageNgFactory = i0.ɵccf("page-login", i24.LoginPage, View_LoginPage_Host_0, {}, {}, []);
export { LoginPageNgFactory as LoginPageNgFactory };
//# sourceMappingURL=login.ngfactory.js.map