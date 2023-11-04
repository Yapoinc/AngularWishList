import { Component,OnInit,Output,EventEmitter,Input } from '@angular/core';
import { HandyData } from 'src/shared/data/handyData';
import { WishItem } from 'src/shared/models/wishItem';
import { filterType } from 'src/shared/types/filtertype';

@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.scss']
})
export class WishFilterComponent implements OnInit {
  @Input() filterCb!:filterType;
  @Output() filterCbChange=new EventEmitter<filterType>();
  filterOptions = HandyData.filterOptions;
 
  listFilter='0';

  ngOnInit(): void {
    this.updateFilter();
  } 

  updateFilter(value:string='0') {
    this.filterCb=HandyData.filtersCallbacs[+value];
    this.filterCbChange.emit(this.filterCb);
  }
}
