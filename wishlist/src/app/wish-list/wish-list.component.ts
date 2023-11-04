import { Component,Input, OnInit } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  ngOnInit(): void {
    
  }
  @Input() whishList:WishItem[]=[];



}
