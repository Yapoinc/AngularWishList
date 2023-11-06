import { Observable, Subject } from "rxjs";
import { WishItem } from "../models/wishItem";

 class EventService {
    constructor(){
       // console.log('event service started');
    }
    private subject = new Subject();
    emit(eventName: string, payload: WishItem) {
        this.subject.next({ eventName, payload });

    }
    listen(eventName: string, callback: (event: any) => void) {       
        this.subject.asObservable().subscribe((nextObj:any)=>{
            if(eventName===nextObj.eventName) {
                callback(nextObj.payload);
            }
        });
    }
}
export default new EventService();