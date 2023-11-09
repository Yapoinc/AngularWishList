
import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { Locales } from '../Tools/locales'
import { filterType } from 'src/shared/types/filtertype';
import { HandyData } from 'src/shared/data/handyData';
import events from './../shared/services/EventService';
import { Observable, fromEvent, interval, map, throttleTime, filter} from 'rxjs';

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
   observer = {
    next:(value:string|number) =>{
      console.log(value);
    }
  };

  ngOnInit(): void {
    var btn1 = document.getElementById('btn1');
   
    if (!btn1)
      return;
    var rxjsInterval = interval(1000)
    .pipe(map(v=>v*3), throttleTime(1000), filter(e=>!(e%2)), )    
    .subscribe(this.observer);

    setTimeout(() => {
      rxjsInterval.unsubscribe();
    }, 66000);
    
    
    

   

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
