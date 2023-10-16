import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items:WishItem[]= [
      new WishItem('Learn Angular'),
      new WishItem('Get coffee',true),
      new WishItem('Find grass that cut itself'),
  ]
  title = 'wishlist';


  toggleItem(e:Event,item:WishItem) {    
    item.isComplete=!item.isComplete;
  }
}
