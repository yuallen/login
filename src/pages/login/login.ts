import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Page1 } from "../page1/page1";

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  data : any;
  fetchdata : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert: AlertController, 
  private http : Http, private loading : LoadingController) {
  this.data = {};
  this.data.username = "";
  this.data.password = "";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

submit(){
  var isAuthenticated = false;
  let username1 = this.data.username;
  let password1 = this.data.password1;
  let data = JSON.stringify({username1, password1});
  let link = "http://localhost:80/Login.php";

  this.http.post(link, data)
    .subscribe(data=>{      
      this.fetchdata = data;
      console.log(this.fetchdata);
      let loader = this.loading.create({
        content: "Checking... Please wait...",
        duration:500
      });
      loader.present();
      this.navCtrl.setRoot(Page1);
      console.log("no error!!!");
    },error=>{
      let alert = this.alert.create({
        title:'Warning',
        subTitle:"Wrong username or password. Please try again.",
        buttons: ['OK']
      });
      alert.present();
      console.log("error!!!");

    });

}
}