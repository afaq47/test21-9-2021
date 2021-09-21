import { Schema, model } from 'mongoose';
import { IAdmin } from '../types/document/admin.document';
import { IProductMenu } from '../types/document/product.menu.document';

const ProductSchemas = new Schema(
  {

    itemName: {type: String},
    price:{type: Number},
    quantity: {type: String},
   
  },
  { timestamps: true }
);
export const ProductMenuSchema = model<IProductMenu>('Product', ProductSchemas);