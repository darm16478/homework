import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {
  contactArray = [{name: 'kirito',telephone :'0622107669',imageUrl : 'assets/imgs/kirito.jpg'}
                  ,{name: 'asuna',telephone :'0622107669',imageUrl : 'assets/imgs/asuna.png'}
                  ,{name: 'hyo',telephone :'0622107669',imageUrl : 'assets/imgs/hyo.jpg'}
                  ,{name: 'kana',telephone :'0622107669',imageUrl : 'assets/imgs/kana.jpg'}
                ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }
  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);
  }
}
