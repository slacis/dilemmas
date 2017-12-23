import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { TabsPage } from "../pages/tabs/tabs";
import { ChoiceProvider } from '../providers/choice/choice';
import { AddChoicePage } from "../pages/add-choice/add-choice";
import { Camera } from "@ionic-native/camera";
import { ImagePicker } from "@ionic-native/image-picker";
import { HttpClientModule } from "@angular/common/http";
import { ChoicePage } from "../pages/choice/choice";
import { ChoicesPage } from "../pages/choices/choices";
import { DataStorageProvider } from '../providers/data-storage/data-storage';
import { AuthProvider } from '../providers/auth/auth';
import { SignupPage } from "../pages/signup/signup";
import { LoginPage } from "../pages/login/login";
import { IonicStorageModule } from "@ionic/storage";
import { ViewImagePage } from "../pages/view-image/view-image";
import { FriendsPage } from "../pages/friends/friends";
import { RequestTabsPage } from "../pages/request-tabs/request-tabs";
import { FriendRequestsPage } from "../pages/friend-requests/friend-requests";
import { FriendProvider } from '../providers/friend/friend';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        TabsPage,
                        AddChoicePage,
                        ChoicePage,
                        ChoicesPage,
                        LoginPage,
                        SignupPage,
                        ViewImagePage,
                        FriendsPage,
                        RequestTabsPage,
                        FriendRequestsPage
                    ],
                    imports: [
                        BrowserModule,
                        HttpClientModule,
                        IonicModule.forRoot(MyApp, {
                            scrollPadding: false,
                            scrollAssist: true,
                            autoFocusAssist: false,
                            backButtonText: '',
                        }),
                        IonicStorageModule.forRoot()
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        MyApp,
                        TabsPage,
                        AddChoicePage,
                        ChoicePage,
                        ChoicesPage,
                        LoginPage,
                        SignupPage,
                        ViewImagePage,
                        FriendsPage,
                        RequestTabsPage,
                        FriendRequestsPage
                    ],
                    providers: [
                        StatusBar,
                        Camera,
                        SplashScreen,
                        ImagePicker,
                        { provide: ErrorHandler, useClass: IonicErrorHandler },
                        ChoiceProvider,
                        DataStorageProvider,
                        AuthProvider,
                        FriendProvider,
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map