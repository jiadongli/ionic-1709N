import {Component} from '@angular/core';
import {IonicPage, NavController, AlertController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = {
    email: 'tom@tom.com',
    password: '123'
  };

  constructor(public navCtrl: NavController,
              public httpClient: HttpClient,
              public alertCtrl: AlertController) {
  }

  signUpPage(): void {
    this.navCtrl.push('SignUpPage');
  }

  signIn(): void {
    let url = '/signIn';
    this.httpClient.post(url, {user: this.user})
      .subscribe(
        res => {
          let status = res['status'];
          if (status === 'ok') {
            this.navCtrl.push('IndexPage');
          } else {
            this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Invalid Email or Password.',
              buttons: ['OK']
            }).present();
          }
        },
        err => {
          console.error(err);
        }
      );
  }
}
