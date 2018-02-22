import {Component} from '@angular/core';
import {IonicPage, NavController, AlertController} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';

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
              private httpClient: HttpClient,
              private alertCtrl: AlertController,
              private storage: Storage) {
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
            // 保存用户的登录信息
            this.storage.set('email', this.user.email);
            // this.storage.set('user', user);
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
