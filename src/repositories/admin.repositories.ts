import { AdminSchema } from '../model/admin.model';
import { IAdmin } from '../types/document/admin.document';
import { IAdminCreateWaiterReq } from '../types/request/admin.request';
export class AdminRepositories {
  constructor() {}
  adminGet(_id: string) {
    return AdminSchema.findById(_id);
  }
  adminCreateWaiter(save: IAdminCreateWaiterReq) {
    return new AdminSchema(save).save();
  }
  adminUpdate(Update: IAdmin) {
    return AdminSchema.findByIdAndUpdate(Update._id, Update, {
      new: true
    });
  }
  adminDelete(_id: string) {
    return AdminSchema.findByIdAndDelete(_id);
  }
  adminGetlist() {
   return AdminSchema.find();
  }
  loginwaiter(body:any){
    return AdminSchema.findOne({email:body.email,password:body.password})
  }


}