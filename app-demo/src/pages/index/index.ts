import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

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

  products;
  page: number = 1;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public httpClient: HttpClient) {

  }

  ionViewDidLoad() {
    console.error('IndexPage 视图加载完成');
    let url = `/products/${this.page}`;
    this.httpClient.get(url)
      .subscribe(
        res => {
          this.products = res;
        },
        err => {
          console.error(err);
        }
      );
  }

  loadMoreData(infiniteScrollEvent): void {
    let url = `/products/${++this.page}`;
    this.httpClient.get(url)
      .subscribe(
        res => {
          console.error(`current page: `, this.page, res);
          // 在原有 JSON 数组的基础上，添加新一页的数据
          this.products = this.products.concat(res);
          infiniteScrollEvent.complete();
        },
        err => {
          console.error(err);
        }
      );
  }

// WebStorm live template
}
