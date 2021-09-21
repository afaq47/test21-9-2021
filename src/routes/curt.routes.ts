import express from 'express';
import { CurtController } from '../controller/curt.controller';
import{OrderModel } from '../model/order.model'

export class CurtRoutes {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {

     
        this.router.post('/addcurt', async (req: any, res, next) => {
            try {
                let curt = await new CurtController(req.user?.type).Addcurt(req.body);
                res.status(200).send(curt).end();
            } catch (error) {
                next(error);
            }
        });
        this.router.post('/addcurt', async (req: any, res, next) => {
            try {
                let curt = await  OrderModel.find(req.body);
                res.status(200).send(curt).end();
            } catch (error) {
                next(error);
            }
        });
    }
}
export const CurtRoutesApi = new CurtRoutes().router;