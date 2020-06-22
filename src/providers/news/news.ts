import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const  API:string = "http://newsapi.org/v2/top-headlines?country=id&apiKey=a67802a849b64eb7a0808d8e49067ba7"
@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getNews(){
    return this.http.get(API)
  }

}
