import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { HandyData } from 'src/shared/data/handyData';
import { WishItem } from 'src/shared/models/wishItem';
import { filterType } from 'src/shared/types/filtertype';

@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.scss']
})
export class WishFilterComponent implements OnInit {
  
  filterOptions = HandyData.filterOptions;
  filters=HandyData.filtersCallbacs;
  listFilter='0';
  @Output() filterEmitter=new EventEmitter<filterType>();
  ngOnInit(): void {
    this.changeFilterHandler();
  } 


  changeFilterHandler(value:string='0') {
    this.filterEmitter.emit(this.filters[+value]);
  }
}
