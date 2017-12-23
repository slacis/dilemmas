/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "./app.module";
import * as i2 from "ionic-angular/components/app/app-root";
import * as i3 from "../../node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory";
import * as i4 from "../../node_modules/ionic-angular/components/alert/alert-component.ngfactory";
import * as i5 from "../../node_modules/ionic-angular/components/app/app-root.ngfactory";
import * as i6 from "../../node_modules/ionic-angular/components/loading/loading-component.ngfactory";
import * as i7 from "../../node_modules/ionic-angular/components/modal/modal-component.ngfactory";
import * as i8 from "../../node_modules/ionic-angular/components/picker/picker-component.ngfactory";
import * as i9 from "../../node_modules/ionic-angular/components/popover/popover-component.ngfactory";
import * as i10 from "../../node_modules/ionic-angular/components/select/select-popover-component.ngfactory";
import * as i11 from "../../node_modules/ionic-angular/components/toast/toast-component.ngfactory";
import * as i12 from "./app.component.ngfactory";
import * as i13 from "../pages/tabs/tabs.ngfactory";
import * as i14 from "../pages/add-choice/add-choice.ngfactory";
import * as i15 from "../pages/choice/choice.ngfactory";
import * as i16 from "../pages/choices/choices.ngfactory";
import * as i17 from "../pages/login/login.ngfactory";
import * as i18 from "../pages/signup/signup.ngfactory";
import * as i19 from "../pages/view-image/view-image.ngfactory";
import * as i20 from "../pages/friends/friends.ngfactory";
import * as i21 from "../pages/request-tabs/request-tabs.ngfactory";
import * as i22 from "../pages/friend-requests/friend-requests.ngfactory";
import * as i23 from "@angular/common";
import * as i24 from "@angular/platform-browser";
import * as i25 from "ionic-angular/gestures/gesture-config";
import * as i26 from "@angular/common/http";
import * as i27 from "@angular/forms";
import * as i28 from "ionic-angular/components/action-sheet/action-sheet-controller";
import * as i29 from "ionic-angular/components/app/app";
import * as i30 from "ionic-angular/config/config";
import * as i31 from "ionic-angular/components/alert/alert-controller";
import * as i32 from "ionic-angular/util/events";
import * as i33 from "ionic-angular/util/form";
import * as i34 from "ionic-angular/tap-click/haptic";
import * as i35 from "ionic-angular/platform/platform";
import * as i36 from "ionic-angular/platform/keyboard";
import * as i37 from "ionic-angular/platform/dom-controller";
import * as i38 from "ionic-angular/components/loading/loading-controller";
import * as i39 from "ionic-angular/module";
import * as i40 from "ionic-angular/navigation/url-serializer";
import * as i41 from "ionic-angular/navigation/deep-linker";
import * as i42 from "ionic-angular/util/module-loader";
import * as i43 from "ionic-angular/components/modal/modal-controller";
import * as i44 from "ionic-angular/components/picker/picker-controller";
import * as i45 from "ionic-angular/components/popover/popover-controller";
import * as i46 from "ionic-angular/tap-click/tap-click";
import * as i47 from "ionic-angular/gestures/gesture-controller";
import * as i48 from "ionic-angular/components/toast/toast-controller";
import * as i49 from "ionic-angular/transitions/transition-controller";
import * as i50 from "@ionic/storage/dist/storage";
import * as i51 from "@ionic-native/status-bar/index";
import * as i52 from "@ionic-native/camera/index";
import * as i53 from "@ionic-native/splash-screen/index";
import * as i54 from "@ionic-native/image-picker/index";
import * as i55 from "../providers/auth/auth";
import * as i56 from "../providers/data-storage/data-storage";
import * as i57 from "../providers/choice/choice";
import * as i58 from "../providers/friend/friend";
import * as i59 from "ionic-angular/util/ionic-error-handler";
import * as i60 from "ionic-angular/platform/platform-registry";
import * as i61 from "ionic-angular/components/app/menu-controller";
import * as i62 from "ionic-angular/util/ng-module-loader";
import * as i63 from "ionic-angular/config/mode-registry";
import * as i64 from "@ionic/storage/dist/index";
import * as i65 from "./app.component";
var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.IonicApp], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ActionSheetCmpNgFactory, i4.AlertCmpNgFactory, i5.IonicAppNgFactory, i6.LoadingCmpNgFactory, i7.ModalCmpNgFactory, i8.PickerCmpNgFactory, i9.PopoverCmpNgFactory, i10.SelectPopoverNgFactory, i11.ToastCmpNgFactory, i12.MyAppNgFactory, i13.TabsPageNgFactory, i14.AddChoicePageNgFactory, i15.ChoicePageNgFactory, i16.ChoicesPageNgFactory, i17.LoginPageNgFactory, i18.SignupPageNgFactory, i19.ViewImagePageNgFactory, i20.FriendsPageNgFactory, i21.RequestTabsPageNgFactory, i22.FriendRequestsPageNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i23.NgLocalization, i23.NgLocaleLocalization, [i0.LOCALE_ID, [2, i23.ɵa]]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i24.DomSanitizer, i24.ɵe, [i23.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i24.DomSanitizer]), i0.ɵmpd(4608, i24.HAMMER_GESTURE_CONFIG, i25.IonicGestureConfig, []), i0.ɵmpd(5120, i24.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p1_0, p2_0, p2_1) { return [new i24.ɵDomEventsPlugin(p0_0, p0_1), new i24.ɵKeyEventsPlugin(p1_0), new i24.ɵHammerGesturesPlugin(p2_0, p2_1)]; }, [i23.DOCUMENT, i0.NgZone, i23.DOCUMENT, i23.DOCUMENT, i24.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i24.EventManager, i24.EventManager, [i24.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i24.ɵDomSharedStylesHost, i24.ɵDomSharedStylesHost, [i23.DOCUMENT]), i0.ɵmpd(4608, i24.ɵDomRendererFactory2, i24.ɵDomRendererFactory2, [i24.EventManager, i24.ɵDomSharedStylesHost]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i24.ɵDomRendererFactory2]), i0.ɵmpd(6144, i24.ɵSharedStylesHost, null, [i24.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i24.Meta, i24.Meta, [i23.DOCUMENT]), i0.ɵmpd(4608, i24.Title, i24.Title, [i23.DOCUMENT]), i0.ɵmpd(4608, i26.HttpXsrfTokenExtractor, i26.ɵg, [i23.DOCUMENT, i0.PLATFORM_ID, i26.ɵe]), i0.ɵmpd(4608, i26.ɵh, i26.ɵh, [i26.HttpXsrfTokenExtractor, i26.ɵf]), i0.ɵmpd(5120, i26.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i26.ɵh]), i0.ɵmpd(4608, i26.ɵd, i26.ɵd, []), i0.ɵmpd(6144, i26.XhrFactory, null, [i26.ɵd]), i0.ɵmpd(4608, i26.HttpXhrBackend, i26.HttpXhrBackend, [i26.XhrFactory]), i0.ɵmpd(6144, i26.HttpBackend, null, [i26.HttpXhrBackend]), i0.ɵmpd(5120, i26.HttpHandler, i26.ɵinterceptingHandler, [i26.HttpBackend, [2, i26.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i26.HttpClient, i26.HttpClient, [i26.HttpHandler]), i0.ɵmpd(4608, i27.ɵi, i27.ɵi, []), i0.ɵmpd(4608, i27.FormBuilder, i27.FormBuilder, []), i0.ɵmpd(4608, i28.ActionSheetController, i28.ActionSheetController, [i29.App, i30.Config]), i0.ɵmpd(4608, i31.AlertController, i31.AlertController, [i29.App, i30.Config]), i0.ɵmpd(4608, i32.Events, i32.Events, []), i0.ɵmpd(4608, i33.Form, i33.Form, []), i0.ɵmpd(4608, i34.Haptic, i34.Haptic, [i35.Platform]), i0.ɵmpd(4608, i36.Keyboard, i36.Keyboard, [i30.Config, i35.Platform, i0.NgZone, i37.DomController]), i0.ɵmpd(4608, i38.LoadingController, i38.LoadingController, [i29.App, i30.Config]), i0.ɵmpd(5120, i23.LocationStrategy, i39.provideLocationStrategy, [i23.PlatformLocation, [2, i23.APP_BASE_HREF], i30.Config]), i0.ɵmpd(4608, i23.Location, i23.Location, [i23.LocationStrategy]), i0.ɵmpd(5120, i40.UrlSerializer, i40.setupUrlSerializer, [i29.App, i40.DeepLinkConfigToken]), i0.ɵmpd(5120, i41.DeepLinker, i41.setupDeepLinker, [i29.App, i40.UrlSerializer, i23.Location, i42.ModuleLoader, i0.ComponentFactoryResolver]), i0.ɵmpd(4608, i43.ModalController, i43.ModalController, [i29.App, i30.Config, i41.DeepLinker]), i0.ɵmpd(4608, i44.PickerController, i44.PickerController, [i29.App, i30.Config]), i0.ɵmpd(4608, i45.PopoverController, i45.PopoverController, [i29.App, i30.Config, i41.DeepLinker]), i0.ɵmpd(4608, i46.TapClick, i46.TapClick, [i30.Config, i35.Platform, i37.DomController, i29.App, i47.GestureController]), i0.ɵmpd(4608, i48.ToastController, i48.ToastController, [i29.App, i30.Config]), i0.ɵmpd(4608, i49.TransitionController, i49.TransitionController, [i35.Platform, i30.Config]), i0.ɵmpd(5120, i50.Storage, i50.provideStorage, [i50.StorageConfigToken]), i0.ɵmpd(4608, i51.StatusBar, i51.StatusBar, []), i0.ɵmpd(4608, i52.Camera, i52.Camera, []), i0.ɵmpd(4608, i53.SplashScreen, i53.SplashScreen, []), i0.ɵmpd(4608, i54.ImagePicker, i54.ImagePicker, []), i0.ɵmpd(4608, i55.AuthProvider, i55.AuthProvider, [i50.Storage, i26.HttpClient]), i0.ɵmpd(4608, i56.DataStorageProvider, i56.DataStorageProvider, [i55.AuthProvider, i50.Storage, i26.HttpClient]), i0.ɵmpd(4608, i57.ChoiceProvider, i57.ChoiceProvider, [i38.LoadingController, i56.DataStorageProvider, i50.Storage, i26.HttpClient]), i0.ɵmpd(4608, i58.FriendProvider, i58.FriendProvider, [i56.DataStorageProvider, i26.HttpClient]), i0.ɵmpd(512, i23.CommonModule, i23.CommonModule, []), i0.ɵmpd(512, i0.ErrorHandler, i59.IonicErrorHandler, []), i0.ɵmpd(256, i30.ConfigToken, { scrollPadding: false, scrollAssist: true, autoFocusAssist: false, backButtonText: "" }, []), i0.ɵmpd(1024, i60.PlatformConfigToken, i60.providePlatformConfigs, []), i0.ɵmpd(1024, i35.Platform, i35.setupPlatform, [i24.DOCUMENT, i60.PlatformConfigToken, i0.NgZone]), i0.ɵmpd(1024, i30.Config, i30.setupConfig, [i30.ConfigToken, i35.Platform]), i0.ɵmpd(512, i37.DomController, i37.DomController, [i35.Platform]), i0.ɵmpd(512, i61.MenuController, i61.MenuController, []), i0.ɵmpd(512, i29.App, i29.App, [i30.Config, i35.Platform, [2, i61.MenuController]]), i0.ɵmpd(512, i47.GestureController, i47.GestureController, [i29.App]), i0.ɵmpd(256, i40.DeepLinkConfigToken, null, []), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i62.NgModuleLoader, i62.NgModuleLoader, [i0.Compiler]), i0.ɵmpd(1024, i42.ModuleLoader, i42.provideModuleLoader, [i62.NgModuleLoader, i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p3_0, p3_1, p3_2, p3_3, p3_4, p4_0, p4_1, p4_2, p4_3) { return [i24.ɵh(p0_0), i63.registerModeConfigs(p1_0), i32.setupProvideEvents(p2_0, p2_1), i46.setupTapClick(p3_0, p3_1, p3_2, p3_3, p3_4), i42.setupPreloading(p4_0, p4_1, p4_2, p4_3)]; }, [[2, i0.NgProbeToken], i30.Config, i35.Platform, i37.DomController, i30.Config, i35.Platform, i37.DomController, i29.App, i47.GestureController, i30.Config, i40.DeepLinkConfigToken, i42.ModuleLoader, i0.NgZone]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i24.BrowserModule, i24.BrowserModule, [[3, i24.BrowserModule]]), i0.ɵmpd(512, i26.HttpClientXsrfModule, i26.HttpClientXsrfModule, []), i0.ɵmpd(512, i26.HttpClientModule, i26.HttpClientModule, []), i0.ɵmpd(512, i27.ɵba, i27.ɵba, []), i0.ɵmpd(512, i27.FormsModule, i27.FormsModule, []), i0.ɵmpd(512, i27.ReactiveFormsModule, i27.ReactiveFormsModule, []), i0.ɵmpd(512, i39.IonicModule, i39.IonicModule, []), i0.ɵmpd(512, i64.IonicStorageModule, i64.IonicStorageModule, []), i0.ɵmpd(512, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i26.ɵe, "XSRF-TOKEN", []), i0.ɵmpd(256, i26.ɵf, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i2.AppRootToken, i65.MyApp, []), i0.ɵmpd(256, i23.APP_BASE_HREF, "/", []), i0.ɵmpd(256, i50.StorageConfigToken, null, [])]); });
export { AppModuleNgFactory as AppModuleNgFactory };
//# sourceMappingURL=app.module.ngfactory.js.map