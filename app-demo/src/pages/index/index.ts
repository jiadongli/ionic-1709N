import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 30; i++) {
      this.items.push(this.items.length);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  doInfinite(event): void {
    // 定时器的作用是模拟 HTTP 请求的一个时间延迟
    console.error('load more data...');
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push(this.items.length);
      }
      console.error('data loaded...');
      // todo HTTP
      event.complete();
    }, 3000);
  }

}
