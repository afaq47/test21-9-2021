import express from 'express';
//import { waiterOderController } from '../controller/waiters.oder.Admin';
import { ProductMenuController } from '../controller/product.menu.controller';
import { IAdminDeleteWaiterReq, IAdminGetWaiterReq, IAdminCreateWaiterReq,IAdminUpdateWaiterReq } from '../types/Request/admin.request';
import { IProductMenuCreateReq ,IProducMenutUpdateReq,IProductMenuDeleteReq} from '../types/request/product.menu.request';
import { IAdminSaveAndUpdateWaiterRes } from '../types/Responses/admin.responses';
import { IProductMenuSaveAndUpdateRes } from '../types/responses/product.menu.responses';
//import apikeyjwt from '../Middleware/jwtauth';
//import { SaveUpdateResmenu } from '../types/Responses/menu.responses';
//import { IUserCreateResponse } from '../types/Responses/User.responses';
//import { IUserCreateRequest } from '../types/Request/user.request';

export class ProductRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
   

          //add new user
         this.router.put('/createUser', async function(req, res ,next){
        try{
      const userRequest: IAdminCreateWaiterReq = req.body
      const createdUser: IAdminSaveAndUpdateWaiterRes = await new ProductMenuController().createUser(userRequest)
      res.send(createdUser)
        }catch(error) {
            next(error);
          }
         });

          //Add new Product
         this.router.post('/createProductMenu', async function(req, res ,next){
      try{
    const userRequest: IProductMenuCreateReq = req.body
    
    const createdMenu: any = await new ProductMenuController().createProductMenu(userRequest)
  
    res.send(createdMenu)
      }catch(error) {
          next(error);
        }
         });

        //Deleting Product from the collection ..route
         this.router.delete('/deleteProductMenu', async (req, res, next) => {
      try {
        const delreq:IProductMenuDeleteReq = req.body;
        const Deleted_admin = await new ProductMenuController().deleteProductMenu(delreq);
        res.status(200).json({
          message: 'Product Details deleted'
        });
      } catch (error) {
        next(error);
      }
         });

        //Updating Product in the collection ..route
         this.router.put('/updateProductMenuDetail', async (req, res, next) => {
          try {
            const admin: IProducMenutUpdateReq = req.body;
            const upadated_admin:IProductMenuSaveAndUpdateRes = await new ProductMenuController().updateProductMenu(admin);
            const response = {
              upadated_admin,
            };
            res.status(200).json({
              message: response
            });
          } catch (error) {
            next(error);
          }
         });

        //GEt all Product
         this.router.get('/getProductMenuList', async (req, res, next) => {
          try {
            const adminList: IProductMenuSaveAndUpdateRes[] = await new ProductMenuController().getProductMenuList();
            res.status(200).json({
              result: adminList
            });
    
          } catch (error) {
            next(error);
          }
         });
    

  }
}
export const ProductRoutesApi = new ProductRoutes().router;