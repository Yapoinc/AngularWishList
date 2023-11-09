import { Component, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { Locales } from '../Tools/locales'
import { filterType } from 'src/shared/types/filtertype';
import { HandyData } from 'src/shared/data/handyData';
import events from './../shared/services/EventService';
import { Observable, fromEvent, scan } from 'rxjs';
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
    next: (value: any) => {      
      console.log('next');
      console.log(`The value is ${value}`);
      console.log('----------------');
    },
    error: (error: any) => {
      console.log('next');
      console.log(error);
      console.log('----------------');

    },
    complete: () => {
      console.log('Completed');
      console.log('----------------');
    },
  }

  ngOnInit(): void {
    var btn1 = document.getElementById('btn1');
   
    if (!btn1)
      return;
    // fromEvent(btn1, 'click')
    // .subscribe(this.observer);
    var subscription = new Observable(s=>{
      btn1!.onclick=(e)=>s.next(e);
    //   s.next('ok');
    //   setTimeout(() => {
    //     s.complete();
    //   }, 3000);
    //   setTimeout(() => {
    //     s.next('ok3');
    //   }, 5000);
    //  // s.error('Error');
    //   s.next('ok2');
  
  })
    .subscribe(this.observer);
    setTimeout(() => {
      subscription.unsubscribe();
    }, 10000);
   

   

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
