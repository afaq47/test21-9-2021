
import { OrderModel } from '../model/order.model';
import { BillClass } from './bill.repository';
import { UserClass } from "./user.repository";
export class OrderClass {

    /**
    * Get Order based in @param _id
    */
    async GetOrders(_id: string) {
        var user = await new UserClass().ReturnUserById(_id);
        var UserType = user?.type;
        if (UserType == 'admin')
            return OrderModel.find().populate("curt").populate("items.item");
        return OrderModel.find({ curt: _id }).populate("items.item");
    }

    /**
     * Create a new order
     * Uses bill repository to generate bill if order is created
     */
    async CreateOrder(order: any, _id: string) {
        order["curt"] = _id;
        order["order_status"] = "in_queue";
        const neworder = await new OrderModel(order).save();
        if (!neworder)
            return null;
        const orderid = new String(neworder._id).valueOf();
        return new BillClass().generateBill(orderid, neworder.items)
    }

    /**
     * Updates order status for order
     */
    UpdateStatus(order: any) {
        var id = order._id;
        var status = order.status;
        //console.log(menu);
        return OrderModel.findByIdAndUpdate(id, { order_status: status }, {
            new: true
        })
    }
}