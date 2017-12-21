import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestTabsPage } from './request-tabs';

@NgModule({
  declarations: [
    RequestTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestTabsPage),
  ],
})
export class RequestTabsPageModule {}
