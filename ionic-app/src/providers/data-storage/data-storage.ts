import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage"
import {AuthProvider} from "../auth/auth";

/*
  Generated class for the DataStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataStorageProvider {

  constructor(public authProvider: AuthProvider,
              public storage: Storage,
              public http: HttpClient) {
    console.log('Hello DataStorageProvider Provider');
  }

  onStoreChoices(choices) {
    let currentUser = this.storage.get('currentUser').then(
      userName => {
        this.storage.set(userName+'choices', choices)
      }
    )

  }

  onGetChoices() {
    return this.storage.get('currentUser').then(
      userName => {
        return this.storage.get(userName+'choices')
      }
    )
  }

  onStoreFriends(friends) {
    let currentUser = this.storage.get('currentUser').then(
      userName => {
        this.storage.set(userName+'friends', friends)
      }
    )

  }

  onGetFriends() {
    return this.storage.get('currentUser').then(
      userName => {
        return this.storage.get(userName+'friends')
      }
    )
  }

  onStoreIncomingFriendRequests(friends) {
    let currentUser = this.storage.get('currentUser').then(
      userName => {
        this.storage.set(userName+'incomingFriendRequests', friends)
      }
    )

  }

  onGetIncomingFriendRequests() {
    return this.storage.get('currentUser').then(
      userName => {
        return this.storage.get(userName+'incomingFriendRequests')
      }
    )
  }

  onStoreOutgoingFriendRequests(friends) {
    let currentUser = this.storage.get('currentUser').then(
      userName => {
        this.storage.set(userName+'outgoingFriendRequests', friends)
      }
    )

  }

  onGetOutgoingFriendRequests() {
    return this.storage.get('currentUser').then(
      userName => {
        return this.storage.get(userName+'outgoingFriendRequests')
      }
    )
  }

}
