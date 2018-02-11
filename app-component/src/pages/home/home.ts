import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  // 代码类似，重构？

  navToPage(page: string): void {
    // this.navCtrl.push(page);
    switch (page) {
      case 'TestPage': {
        this.navCtrl.push(page);
        break;
      }
      case 'ListPage': {
        this.navCtrl.push(page);
        break;
      }
      case 'CardPage': {
        this.navCtrl.push(page);
        break;
      }
      case 'ButtonPage': {
        this.navCtrl.push(page);
        break;
      }
      case 'FabPage': {
        this.navCtrl.push(page);
        break;
      }
      case 'GesturePage': {
        this.navCtrl.push(page);
        break;
      }
      case 'GridPage': {
        this.navCtrl.push(page);
        break;
      }
      case 'FormPage': {
        this.navCtrl.push(page);
        break;
      }
      case 'ToastPage': {
        this.navCtrl.push(page);
        break;
      }
      case 'AlertPage': {
        this.navCtrl.push(page);
        break;
      }
      case 'IconPage': {
        this.navCtrl.push(page);
        break;
      }
      // cases...
      default : {
        break;
      }
    }
  }

}
