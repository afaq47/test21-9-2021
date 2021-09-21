import { Schema, model } from 'mongoose';
import { IOrderDocument } from '../types/document/oder.document';
const OrderSchema = new Schema(
    {
        curt: {
            type: Schema.Types.ObjectId,
            ref: "curt"
        },
        items: [{
            item: {
                type: Schema.Types.ObjectId,
                ref: "Menu_Items"
            },
            quantity: Number
        }],
        order_status: {
            type: String,
            enum: ["in_queue", "waiting", "completed"]
        }
    },
    { timestamps: true }
);
export const OrderModel = model<IOrderDocument>('Orders', OrderSchema);