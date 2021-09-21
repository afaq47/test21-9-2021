import { Schema, model } from 'mongoose';
import { IUserDocument } from '../types/document/user.document';
const UserSchema = new Schema(
    {
        user_name: {
            type: String,
            unique: true
        },
        password: String,
        type: {
            type: String,
            enum: ["admin", "curt"]
        },
        roles: [String]
    },
    {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                delete ret.createdAt;
                delete ret.updatedAt;
                delete ret.__v;

            }
        }
    }
);
export const User_Schema = model<IUserDocument>('Users', UserSchema);