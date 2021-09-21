import { Schema, model } from 'mongoose';
import { IAdmin } from '../types/document/admin.document';

const IAdminSchema = new Schema(
  {
    FirstName: { type: String },
    LastName: { type: String },
    Desgination: { type: String },
    cell: { type: String },
    JoinDate: { type: String },
    adress: { type: String },
    email: {  type: String,required: true },
   password:{type: String,required: true},
  },
  { timestamps: true }
);
export const AdminSchema = model<IAdmin>('IAdminSchema', IAdminSchema);