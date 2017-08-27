import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
@IonicPage()

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'FavePage';
  tab3Root = 'CartPage';
  tab4Root = 'TransactionPage';
  tab5Root = 'AccountPage';

  constructor() {

  }
}
