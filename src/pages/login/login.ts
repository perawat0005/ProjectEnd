import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CreateAccPage } from '../create-acc/create-acc';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') eamil;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams ,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  logIn(){
    /* console.log(this.eamil.value , this.password.value); */
    if(this.eamil.value == "admin@email.com" && this.password.value == "1234"){
      const alert = this.alertCtrl.create({
        title: 'Wellcome!! Admin',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push(HomePage);
    } 
    else{
      const alert = this.alertCtrl.create({
      title: 'email or password is wrong!! Pls try agian',
      buttons: ['OK']
    });
    alert.present();
  }
  }
  CreateAcc(){
    this.navCtrl.push(CreateAccPage);
  }
}
