import { Document } from 'mongoose';
export interface IProductMenu extends Document {
  _id:string;
  itemName: string;
  price:number;
  createdAt?: string;
  updatedAt?: string;
}
