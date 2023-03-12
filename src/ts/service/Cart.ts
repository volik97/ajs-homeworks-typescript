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
        return this._items.reduce((acc, item) => item.price? acc + item.price : acc, 0)
    }

    totalCostDiscounted(discount: number): number {
        const sum: number = this.totalCost()
        return sum - ((sum * discount) / 100)
    }

    deletedItem(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id)
    }
}