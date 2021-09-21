
import { ProductMenuSchema } from '../model/product.menu.model';
import { IAdmin } from '../types/document/admin.document';
import { IProducMenutUpdateReq, IProductMenuCreateReq } from '../types/request/product.menu.request';
export class ProductMenuRepositories {
  constructor() {}
  productGet(_id: string) {
    return ProductMenuSchema.findById(_id);
  }
  productCreate(save: IProductMenuCreateReq) {
    //console.log(save)
    return new ProductMenuSchema(save).save();
  }
  productUpdate(Update: IProducMenutUpdateReq) {
    return ProductMenuSchema.findByIdAndUpdate(Update._id, Update, {
      new: true
    });
  }
  productDelete(_id: string) {
    return ProductMenuSchema.findByIdAndDelete(_id);
  }
  productGetlist() {
   return ProductMenuSchema.find();
  }


}