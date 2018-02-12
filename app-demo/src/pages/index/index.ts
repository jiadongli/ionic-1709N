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
  hasMoreData: boolean = true;

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
          this.products = res['data'];
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
        res => { // res: {"data": data, "totalPage": totalPage}
          console.error(`current page: `, this.page, res);
          if (this.page === res['totalPage']) {
            this.hasMoreData = false;
          } else {
            // 在原有 JSON 数组的基础上，添加新一页的数据
            this.products = this.products.concat(res['data']);
          }
          infiniteScrollEvent.complete();
        },
        err => {
          console.error(err);
        }
      );
  }

// WebStorm live template
}
