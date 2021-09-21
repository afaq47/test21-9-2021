import { BillModel } from '../model/bill.model';
import { ProductMenuSchema } from '../model/product.menu.model';

export class BillClass {

    /**
     * Generate bill for created order
     * Uses GenerateTotal() to create total bill amount
     */
    async generateBill(id: string, items: any) {
        

        var total = await this.GenerateTotal(items);
        console.log(items,"123")
        var bill = {
            order_id: id,
            items: items,
            total_price: total
        };

        return await new BillModel(bill).save();
    }
    private async GenerateTotal(items: any): Promise<number> {
        console.log(items);
        
        var total: number = 0;
        for (var i = 0; i < items.length; i++) {
            var item = await ProductMenuSchema.findById(items[i].item);
            console.log(item)
            var price: number = item ? item.price : 0;
            var qty = items[i].quantity;
            total += (price * qty);
        }
        return total;
    }
}