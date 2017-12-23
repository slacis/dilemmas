import { Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
// import * as globals from "../../app/shared/globals"
import {User} from "../../models/user.model";
import {DataStorageProvider} from "../data-storage/data-storage";

@Injectable()
export class FriendProvider {
  // server = "http://10.0.2.2:5000"
  // server = "http://127.0.0.1:5000"
  server = "https://3zudaflf8b.execute-api.us-west-2.amazonaws.com/dev"
  friends: User[] = []
  public reloadIncoming = false;
  public reloadOutgoing = false;
  constructor(
    public dataStorage: DataStorageProvider,
    public http: HttpClient) {
    console.log('Hello FriendProvider Provider');
  }

  getServerFriends(token) {
    return this.http.get(this.server + '/friend',
      {
        headers: new HttpHeaders()
          .set('x-access-token', token)
          .set('Content-Type', "application/json")
          .set('Access-Control-Allow-Origin', '*')
      })
      .do(
        (data: User[]) => {
          console.log(data)
          this.friends = data
          this.dataStorage.onStoreFriends(this.friends)
          return this.friends.slice()
        })
  }

  getIncomingFriendRequests(token) {
    return this.http.get(this.server + '/incoming_friend_requests',
      {
        headers: new HttpHeaders()
          .set('x-access-token', token)
          .set('Content-Type', "application/json")
          .set('Access-Control-Allow-Origin', '*')
      })
      // .do(
      //   (data: User[]) => {
          // console.log(data)
          // this.friends = data
          // this.dataStorage.onStoreFriends(this.friends)
          // return this.friends.slice()
        // })
  }

  getOutgoingFriendRequests(token) {
    return this.http.get(this.server + '/outgoing_friend_requests',
      {
        headers: new HttpHeaders()
          .set('x-access-token', token)
          .set('Content-Type', "application/json")
          .set('Access-Control-Allow-Origin', '*')
      })
  }

  onGetIncomingReload(){
    return this.reloadIncoming
  }

  onGetOutgoingReload(){
    return this.reloadOutgoing
  }

  onAcceptFriend(user_id: number, token) {
    let friend_id = {"user_id": user_id}
    return this.http.post(this.server + '/user_accepts_friend', friend_id,
      {
        headers: new HttpHeaders()
          .set('x-access-token', token)
          .set('Content-Type', "application/json")
          .set('Access-Control-Allow-Origin', '*')
      })

  }

  onDeleteFriendRequest(user_id: number, token) {
    let friend_id = {"user_id": user_id}
    return this.http.post(this.server + '/friend_request', friend_id,
      {
        headers: new HttpHeaders()
          .set('x-access-token', token)
          .set('Content-Type', "application/json")
          .set('Access-Control-Allow-Origin', '*')
      })

  }

  onAddFriend(username: string, token) {
    let friend_username = {"username": username}
    return this.http.post(this.server + '/user_adds_friend', friend_username,
      {
        headers: new HttpHeaders()
          .set('x-access-token', token)
          .set('Content-Type', "application/json")
          .set('Access-Control-Allow-Origin', '*')
      })

  }


}
