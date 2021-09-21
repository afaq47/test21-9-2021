import { Schema, model } from 'mongoose';
import { IBillDocument } from '../types/document/bill.document';
const BillSchema = new Schema(
    {
        total_price: Number,
        order_id: {
            type: Schema.Types.ObjectId,
            ref: "Orders"
        },
        items: [{
            item: {
                type: Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: Number
        }],
    },
    { timestamps: true }
);
export const BillModel = model<IBillDocument>('Bills', BillSchema);