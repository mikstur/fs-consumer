import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { User, Payment } from '../models';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public transactions: Array<string> = new Array();
  public payments: Array<Payment> = [];

  public users: Array<User> = [];

  public currentUser: User;

  public loggedIn: boolean = true;

  constructor(
    private navCtrl: NavController
  ) {
    this.transactions.push("one");
    this.transactions.push("two");
    this.transactions.push("three");

    let user1 = new User();
    user1.firstname = "Miki";
    user1.lastname = "vk";

    let user2 = new User();
    user2.firstname = "John";
    user2.lastname = "Smith";

    this.users.push(user1);
    this.users.push(user2);    

    this.currentUser = new User();
    this.currentUser.firstname = "Main User";
  }

  navToTab1() {
    this.navCtrl.navigateForward("main/tabs/tab1");
  }

}
