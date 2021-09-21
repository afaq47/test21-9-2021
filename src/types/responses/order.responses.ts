import { IOrder, ISingleOrderItem } from "../document/oder.document";


export interface IGetOrderResponse {
    _id: string | any;
    items: Array<ISingleOrderItem>;
    order_status: string;
    createdAt?: Date;
    updatedAt?: Date
}
export interface IOrderBill {
    _id: string;
    order_id: IOrder | any;
    total_price: number;
    items: Array<ISingleOrderItem>;
    createdAt?: Date;
    updatedAt?: Date
}