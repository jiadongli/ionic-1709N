import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  user = {
    email: '',
    username: '',
    password: '',
    gender: 'male',
    age: '',
    city: 'Shanghai'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(): void {
    let url = 'http://127.0.0.1:3000/signUp';
    this.httpClient.post(url, {email: this.user.email, password: this.user.password})
      .subscribe(
        (res) => {
            console.error(res);
            // todo
        },
        (err) => {
            console.error(err);
            // todo
        }
      );
  }
// 11:45
}
