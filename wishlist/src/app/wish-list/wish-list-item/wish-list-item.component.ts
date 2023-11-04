import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.scss']
})
export class WishListItemComponent implements OnInit {
  ngOnInit(): void {
    
  }
  @Input() wishText!:string;
  @Input() fullfilled!:boolean;
  @Output() fullfilledChange=new EventEmitter<boolean>();


  toggleItem() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
}
