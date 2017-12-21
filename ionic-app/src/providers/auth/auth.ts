import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {RequestOptions} from "@angular/http";
import { Storage } from "@ionic/storage"
import * as globals from "../../app/shared/globals"

/*
 Generated class for the AuthProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class AuthProvider {
  // server = "http://10.0.2.2:5000"
  // server = "http://127.0.0.1:5000"
  server = "https://3zudaflf8b.execute-api.us-west-2.amazonaws.com/dev"

  constructor(
    private storage: Storage,
    public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  loginUser(user){
    console.log(user.username)
    return this.http.get(globals.serverAddress + '/login',
      {headers: new HttpHeaders().set(
        'Authorization', "Basic " + btoa(user.username + ":" + user.password))})
  }

  signupUser(user) {
    console.log(user.username)
    return this.http.post(globals.serverAddress + '/user', user,
      {
        headers: new HttpHeaders()
          .set('Content-Type', "application/json")
          .set('Access-Control-Allow-Origin', '*')
      })
  }

  logoutUser(){
    this.storage.remove('token');
  }

  isAuthenticated(token){
    return this.http.get(globals.serverAddress + '/is_authenticated',
      {
        headers: new HttpHeaders()
          .set('x-access-token', token)
          .set('Content-Type', "application/json")
          .set('Access-Control-Allow-Origin', '*')
      })
  }



}
