import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    totalCost(): number {
        let sum: number = 0;
        for (let item of this._items) {
            if (item.price) {
                sum += item.price;
            }
        }
        return sum
    }
    
    totalCostDiscounted(discount: number): number{
        let sum: number = 0;
        for (let item of this._items) {
            if (item.price) {
                sum += item.price;
            }
        }
        return sum - ((sum*discount)/100)
    }

    deletedItem(id: number): void{
        const idx = this._items.findIndex(item => item.id == id)
        this._items.splice(idx, 1)
    }
}