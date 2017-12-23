import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Choice} from "../../models/choice.model";
import {Storage} from "@ionic/storage"
// import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import {DataStorageProvider} from "../data-storage/data-storage";
import {LoadingController} from "ionic-angular";
// import * as globals from "../../app/shared/globals"
// import {Response} from '@angular/http';


@Injectable()
export class ChoiceProvider {
  // server = "http://10.0.2.2:5000"
  // server = "http://127.0.0.1:5000"
  server = "https://3zudaflf8b.execute-api.us-west-2.amazonaws.com/dev"
  authToken
  private choices: Choice[] = [];
  public reload = false;

  constructor(
              public loadingCtrl: LoadingController,
              public dataStorage: DataStorageProvider,
              public storage: Storage,
              public http: HttpClient) {
    console.log('Hello ChoiceProvider Provider');
  }



  addChoice(choiceID, description: string, optionOne: string, optionTwo: string, base64ImageOne: string, base64ImageTwo: string, accepted: boolean, token: string) {
    console.log('base64: ')
    console.log(base64ImageTwo)

    let choice = new Choice(choiceID, description, optionOne, optionTwo, base64ImageOne, base64ImageTwo, accepted)
    this.choices.push(choice);
    return this.http.post(this.server + '/choices', choice,
      {
        headers: new HttpHeaders()
          .set('x-access-token', token)
          .set('Content-Type', "application/json")
          .set('Access-Control-Allow-Origin', '*')
      })
  }

  // getChoices() {
  //   const loading = this.loadingCtrl.create({
  //     content: 'Fetching dilemmas...'
  //   });
  //   loading.present();
  //   this.onGetLocalChoices().do(
  //     (choices) => {
  //       if (!choices.isUndefined) {
  //         this.choices = choices
  //         loading.dismiss()
  //         return this.choices.slice()
  //       } else {
  //         this.storage.get('token').then(
  //           token => {
  //             this.getServerUserChoices(token)
  //           })
  //       }
  //     }
  //   )
  // }


  getRandomChoices(token) {
    return this.http.get(this.server + '/random_choices',
      {
        headers: new HttpHeaders()
          .set('x-access-token', token)
          .set('Content-Type', "application/json")
          .set('Access-Control-Allow-Origin', '*')
      })
  }

  makeDecision(decisions, token) {
    let payload = {'choice': decisions}
    return this.http.post(this.server + '/user_made_choice', payload,
      {
        headers: new HttpHeaders()
          .set('x-access-token', token)
          .set('Content-Type', "application/json")
          .set('Access-Control-Allow-Origin', '*')
      })
  }

  getServerUserChoices(token) {
    return this.http.get(this.server + '/choices',
      {
        headers: new HttpHeaders()
          .set('x-access-token', token)
          .set('Content-Type', "application/json")
          .set('Access-Control-Allow-Origin', '*')
      })
      .do(
      (data: Choice[]) => {
        console.log(data)
        this.choices = data
        this.dataStorage.onStoreChoices(this.choices)
        return this.choices.slice()
      })
  }

  onStoreLocalChoices(){
    this.dataStorage.onStoreChoices(this.choices)
  }

  onGetReload(){
    return this.reload
  }

}
