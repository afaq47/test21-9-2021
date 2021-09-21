import { IUser } from "../document/user.document";

export interface IAddCurtResponse {
    _id: string;
    name: string;
    user: IUser | any;
    address: string;
    createdAt?: Date;
    updatedAt?: Date
}