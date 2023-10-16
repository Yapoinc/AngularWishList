import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cut itself'),
  ];
  listFilter: string = '0';
  newWishText = '';
  title = 'wishlist';
  visibleItems = this.items;

  addNewWish() {
    if (!this.newWishText.trim())
      return;
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';

  }
  
  filterChange(e: string) {
    this.visibleItems = this.items;
    if (+e === 1)
      this.visibleItems = this.items.filter(item => !item.isComplete);
    if (+e === 2)
      this.visibleItems = this.items.filter(item => item.isComplete);

  }
  textChange(e: string) {
    console.log(e);
  }
  toggleItem(e: Event, item: WishItem) {
    item.isComplete = !item.isComplete;
  }

}
