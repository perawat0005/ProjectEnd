import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CreateAccPage } from '../create-acc/create-acc';
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') eamil;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams ,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title: '',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }
  
  logIn(){
    console.log(this.eamil.value , this.password.value);
    this.fire.auth.signInWithEmailAndPassword(this.eamil.value, this.password.value)
    .then(data => {
      console.log('got some data',data , this.fire.auth.currentUser);
      this.alert('เข้าสู่ระบบสำเร็จ');
      this.navCtrl.setRoot(HomePage);
    })
    .catch(error => {
      console.log('got error',error);
      this.alert('Email หรือ Password ไม่ถูกต้อง');
    });
    console.log('Would sign in with', this.eamil.value, this.password.value);
    /*if(this.eamil.value == "admin@email.com" && this.password.value == "1234"){
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
  }*/
  }
  CreateAcc(){
    this.navCtrl.push(CreateAccPage);
  }
}
