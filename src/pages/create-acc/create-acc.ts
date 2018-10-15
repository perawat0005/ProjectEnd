import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-create-acc',
  templateUrl: 'create-acc.html',
})
export class CreateAccPage {

  /*@ViewChild('name') name; */
  @ViewChild('email') email;
  @ViewChild('password') password;
  /*@ViewChild('tel') tel; */

  constructor(private alertCtrl: AlertController,private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }  

  createUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(data =>{
        console.log('got data',data);
        this.alert('สร้างบัญชีสำเร็จ')
        this.navCtrl.push(LoginPage);
      })
      .catch(error => {
        console.log('got an error',error);
        this.alert(error.massage);
      });
      console.log('Would register user with ', this.email.value, this.password.value);
  }
}
