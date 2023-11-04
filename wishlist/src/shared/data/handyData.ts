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
            new WishItem('Learn Angular'),
            new WishItem('Get coffee', true),
            new WishItem('Find grass that cut itself'),
            new WishItem('Run 3 times a week'),
            new WishItem('Sleep more'),
            new WishItem('Take vacations', true),
        ]
    }


}