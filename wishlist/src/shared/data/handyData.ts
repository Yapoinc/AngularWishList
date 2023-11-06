import { WishItem } from "../models/wishItem";
import { filterType } from "../types/filtertype";

export class HandyData {


    public static get filterOptions(): { id: number, description: string }[] {
        return [{ id: 0, description: 'All' }, { id: 1, description: 'Unfulfilled' }, { id: 2, description: 'Fulfilled' },];
    }
    public static get filtersCallbacs(): filterType[] {
        return [(x: WishItem) => true, (x: WishItem) => !x.fullfilled, (x: WishItem) => x.fullfilled];
    }

    public static get wishList(): WishItem[] {
        return [
            new WishItem(1,'Learn Angular'),
            new WishItem(2,'Get coffee', true),
            new WishItem(3,'Find grass that cut itself'),
            new WishItem(4,'Run 3 times a week'),
            new WishItem(5,'Sleep more'),
            new WishItem(6,'Take vacations', true),
        ]
    }


}