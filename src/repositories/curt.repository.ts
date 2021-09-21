var ObjectId = require('mongodb').ObjectId;
import { UserClass } from './user.repository';
import { IUser } from "../types/document/user.document";
import { CurtModel } from '../model/curt.model';

//Child class curt inherits properties from super UserClass

export class CurtClass extends UserClass {
    constructor() {
        super()
    }

    /**
     * Add new curt
     * Save user in user collection
     */
    async AddCurt(body: any) {
        let user: any = <IUser>body;
        user['type'] = 'curt';
        let id = await super.SaveNew(user);
        console.log(id,"new")
        body['user'] = id;
        console.log(this.AddCurt,"new")
         return new CurtModel(body).save();
    }

    /**
     * Get curt id based on user _id from session
     */
    async GetCurtId(_id: any) {
        var curt = await CurtModel.findOne({ user: _id });
        return curt?._id;
    }
}