import { IAdmin } from '../types/document/admin.document';
import { AdminRepositories } from '../repositories/admin.repositories';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete,Security, SuccessResponse } from "tsoa";
import { IAdminSaveAndUpdateWaiterRes } from '../types/Responses/admin.responses';
import { IAdminDeleteWaiterReq, IAdminGetWaiterReq, IAdminCreateWaiterReq,IAdminUpdateWaiterReq } from '../types/Request/admin.request';
import { IProducMenutUpdateReq, IProductMenuCreateReq, IProductMenuDeleteReq } from '../types/request/product.menu.request';
import { IProductMenuSaveAndUpdateRes } from '../types/responses/product.menu.responses';
import { ProductMenuRepositories } from '../repositories/product.menu.repositories';
import { IProductMenu } from '../types/document/product.menu.document';
@Route('admin')
@Tags('Admin')
// @Security("api_key")
export class ProductMenuController {
  constructor() { }
 
  /**
   * @summary This will Add user to the system
   */

  @Put('/createUser')
  async createUser(@Body() body:IAdminCreateWaiterReq): Promise<IAdminSaveAndUpdateWaiterRes> {
    const createdUser: IAdmin = await new AdminRepositories().adminCreateWaiter(body)
    return <IAdminSaveAndUpdateWaiterRes>createdUser
  }
  
  /**
   * @summary This will create Product to the system
   */

  @Post('/createProductMenu')
  async createProductMenu(@Body() body:IProductMenuCreateReq): Promise<IProductMenuSaveAndUpdateRes> {
    const createdMenu: any = await new ProductMenuRepositories().productCreate(body)
   
    return <IProductMenuSaveAndUpdateRes>createdMenu
  }

  /**
   * @summary This will update Product to the system
   */

  @Put('/updateProductMenuDetail')
  async updateProductMenu(@Body() admin: IProducMenutUpdateReq): Promise<IProductMenuSaveAndUpdateRes> {
    const update_admin:any = await new ProductMenuRepositories().productUpdate(admin);
    if (update_admin === null)
      throw new CustomeError(400, 'Product Details not updated');
    return <IProductMenuSaveAndUpdateRes>update_admin;
  }

  /**
   * @summary This will delete Product to the system
   */

  @Delete('/deleteProductMenu')
  @SuccessResponse("200","Product deleted")
  async deleteProductMenu(@Body() menu:IProductMenuDeleteReq): Promise<IProductMenuSaveAndUpdateRes> {
    const item: any = await new ProductMenuRepositories().productDelete(<any>menu);
    if (!item)
        throw new CustomeError(404, "Cannot delete menu item",);
    return <IProductMenuSaveAndUpdateRes>item;
}


  /**
   * @summary This will get Product to the system
   */

  @Get('/getProductMenuList')
  async getProductMenuList(): Promise<IProductMenuSaveAndUpdateRes[]> {
    const aadmin: any = await new ProductMenuRepositories().productGetlist();
    return <IProductMenuSaveAndUpdateRes[]>(aadmin);
  }




}
