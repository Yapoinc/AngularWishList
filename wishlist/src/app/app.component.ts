import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { Locales } from '../Tools/locales'
import { filterType } from 'src/shared/types/filtertype';
import { HandyData } from 'src/shared/data/handyData';
import events from './../shared/services/EventService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  filterItems($event: filterType) {
    throw new Error('Method not implemented.');
  }
  constructor() {
    events.listen('removeWish', this.removeWish)
  }

  private removeWish = (wish: WishItem) => this.items = this.items.filter(e => e.id !== wish.id)

  ngOnInit(): void {

  }
  locales = Locales;
  items = HandyData.wishList;
  listFilter: string = '0';
  newWishText = '';
  title = 'Wish List';
  filter: filterType = HandyData.filtersCallbacs[0];

  get visibleitems() {
    return this.items.filter(this.filter as filterType);
  }

  addWish = (wishItem: WishItem) => this.items.push(wishItem);


}
