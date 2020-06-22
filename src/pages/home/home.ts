import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
articles:any;
  constructor(public navCtrl: NavController, private newsprovider:NewsProvider) {
    this.showNews()
  }

  showNews(){
    this.newsprovider.getNews()
    .subscribe(news => {
      this.articles = news['articles'];
      console.log(this.articles);
    })
  }
}
