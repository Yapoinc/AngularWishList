import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.scss']
})
export class WishListItemComponent implements OnInit {
  ngOnInit(): void {

  }
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
}
