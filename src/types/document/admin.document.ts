import { Document } from 'mongoose';
export interface IAdmin extends Document {
  _id:string;
  FirstName: string;
  LastName: string;
  email:  string ;
  password:string;
  Desgination: string;
  createdAt?: string;
  updatedAt?: string;
}