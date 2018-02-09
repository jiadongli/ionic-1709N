import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp(): void {
    this.httpClient.post('/signUp', {user:this.user})
      .subscribe(
        res => {
          if (res['status'] === 'exist') {
            this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Email is already exist.',
              buttons:['OK']
            }).present();
          }
        },
        err => {
            console.error(err);
            // todo
        }
      );
  }
}
