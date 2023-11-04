import { WishItem } from "../models/wishItem";
import { filterType } from "../types/filtertype";

export class HandyData {


    public static get filterOptions():{id:number,description:string}[] {
        return [{ id: 0, description: 'All' }, { id: 1, description: 'Unfulfilled' }, { id: 2, description: 'Fulfilled' },];
    }
public static get filtersCallbacs():filterType[] {
    return [(x: WishItem) => true, (x: WishItem) => !x.isComplete, (x: WishItem) => x.isComplete];
}

}