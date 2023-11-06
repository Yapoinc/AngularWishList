import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import events from './../../../shared/services/EventService';
@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.scss']
})
export class WishListItemComponent implements OnInit {
  ngOnInit(): void {

  }
  @Input() wish!:WishItem;
  @Input() wishText!: string;
  @Input() fullfilled!: boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();


  toggleItem() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled);
  }
  get cssClasses() {
    let result:string|string[]|{}={};
    if (this.fullfilled) {
      result = 'strikeout text-muted';
      result = ['strikeout', 'text-muted'];
      result = {'strikeout':this.fullfilled,'text-muted':this.fullfilled};
      result = {'strikeout text-muted':this.fullfilled};
    }
    return result;
  }
  removeWish=()=>events.emit('removeWish',this.wish);
  
}
