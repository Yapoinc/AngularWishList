import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { Locales } from '../Tools/locales'
import { filterType } from 'src/shared/types/filtertype';
import { HandyData } from 'src/shared/data/handyData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
filterItems($event: filterType) {
throw new Error('Method not implemented.');
}
  constructor() {
   
  }
  locales = Locales;
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cut itself'),
    new WishItem('Run 3 times a week'),
    new WishItem('Sleep more'),
    new WishItem('Take vacations', true),
  ];
  listFilter: string = '0';
  newWishText = '';
  title = 'Wish List';
  filter:filterType=HandyData.filtersCallbacs[0];
  get visibleitems() {
   
     return this.items.filter(this.filter as filterType);
   }
  addWish = (wishItem: WishItem) => {
    this.items.push(wishItem);
  }

}
