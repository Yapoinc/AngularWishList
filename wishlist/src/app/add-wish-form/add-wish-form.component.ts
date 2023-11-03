import { Component,Output,EventEmitter,ViewChild, ElementRef } from '@angular/core';
import { Locales } from 'src/Tools/locales';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.scss']
})
export class AddWishFormComponent {
@Output() addWishEmiter=new EventEmitter<WishItem>();
@ViewChild('theInput') theInput!:ElementRef ;
locales=Locales;
newWishText='';

addNewWish=()=> {
  if (!this.newWishText.trim())
    return;
  this.addWishEmiter.emit(new WishItem(this.newWishText))
  this.newWishText = '';
}
textChange(e: string) {
  //console.log(this.theInput.nativeElement.id);
  
  let p1 = this.theInput.nativeElement as HTMLInputElement;

}
inputChange(e:Event) {
// console.log(e);
// console.log(e.target);

}


keypressHandler(e:KeyboardEvent) {
 
  if(e.key ==='Enter') 
    this.addNewWish()

}
}
