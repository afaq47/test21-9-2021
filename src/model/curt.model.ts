import { Schema, model } from 'mongoose';
import { ICurtDocument } from '../types/document/curt.document';
const curtSchema = new Schema(
    {
        name: String,
        user: {
            type: Schema.Types.ObjectId,
            ref: "Users"
        },
        address: String
    },
    { timestamps: true }
);
export const CurtModel = model<ICurtDocument>('curt', curtSchema);