import express from 'express';

import jwt from "jsonwebtoken"

//import {  waiteroderRoutesApi } from './waiter.oder.Routes';
//import { waiterOderController } from '../controller/waiters.oder.Admin';


import { TokenVerifier } from '../middleware/UserAuth';
import { CurtRoutesApi } from './curt.routes';
import { LoginRoutesApi } from './login.routes';
import { OrderRoutesApi } from './order.routes';
import { ProductRoutesApi } from './product.menu.routes';
export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {


        // this.router.post ('/waiter/loginwaiter',async function (req,res) {
        //    const loginadmin = await new WaiterController().loginwaiter(req.body);
        //    const data = JSON.stringify(loginadmin);
        //    if(loginadmin){
        //        res.send(jwt.sign(data,"[abdcdefghij]"))
        //    }
        //    else{
        //        res.send("invlaidlogin")
        //    }
        // })
     
             
       
        this.router.use('/admin', ProductRoutesApi);
        this.router.use(LoginRoutesApi); 
        this.router.use('/order', TokenVerifier, OrderRoutesApi);
        this.router.use('/Curt', TokenVerifier, CurtRoutesApi);
    }       

    }



export const MainApi = new MainRouter().router;