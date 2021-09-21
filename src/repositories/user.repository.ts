import { User_Schema } from '../model/user.model';
import { IUserDocument } from '../types/document/user.document';
export class UserClass {

    /**
     * save new user request from children classes
     */
    protected async SaveNew(user: IUserDocument) {
        let doc = await new User_Schema(user).save();
        return doc._id;
    }

    /**
     * Return user based on user_name and password. For login
     */
    ReturnUser(user: any) {
        return User_Schema.findOne({ user_name: user.username, password: user.password })
    }

    /**
     * Return user based on id. For role management
     */
    ReturnUserById(id: string) {
        return User_Schema.findById(id);
    }
}