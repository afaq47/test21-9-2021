import { Document, Schema } from "mongoose";
import { IProductMenu } from "./product.menu.document";
export interface IOrderDocument extends Document {
    _id: string | Schema.Types.ObjectId;
    curt: string | Schema.Types.ObjectId;
    items: Array<ISingleOrderItem>;
    order_status: string;
    quantity: number
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined
}
export interface IOrder {
    _id: string | any;
    curt: string | any;
    items: Array<ISingleOrderItem> | any;
    quantity: number
    order_status: string;
    createdAt?: Date | any;
    updatedAt?: Date | any
}
export interface ISingleOrderItem {
    item: string | IProductMenu;
    quantity: number
}