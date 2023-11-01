import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import {Locales} from '../Tools/locales'
let filters=[(x:WishItem)=>true,(x:WishItem)=>!x.isComplete, (x:WishItem)=>x.isComplete];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    console.log();
  }
  filterOptions=[{id:0,description:'All'},{id:1,description:'Unfulfilled'},{id:2,description:'Fulfilled'},];
  locales=Locales;
  private items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cut itself'),
    new WishItem('Run 3 times a week'),
    new WishItem('Sleep more'),
    new WishItem('Take vacations',true),    
  ];
  listFilter: string = '0';
  newWishText = '';
  title = 'Wish List';

  addNewWish=()=> {
    if (!this.newWishText.trim())
      return;
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';

  }
   get visibleItems() {
    return this.items.filter(filters[+this.listFilter]);
   }


  textChange(e: string) {
    //console.log(e);
  }
  toggleItem(e: Event, item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  keypressHandler(e:KeyboardEvent) {
   
    if(e.key ==='Enter') 
      this.addNewWish()

  }
}
