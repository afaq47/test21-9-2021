import { Get, Route, Tags, Post, Body, Put, SuccessResponse } from "tsoa";
import { Controller, Security } from '@tsoa/runtime';
import { OrderClass } from '../repositories/order.repository';
import { ITakeOrderRequest } from '../types/request/oder.request';
import { IGetOrderResponse, IOrderBill } from '../types/responses/order.responses';
import { UserClass } from '../repositories/user.repository';
import CustomError from '../utills/error';
import { IOrder } from "../types/document/oder.document";

@Route('/order')
@Tags('Order')
@Security('api_key')
export class OrderController extends Controller {
    _id: string;
    constructor(id: string) {
        super();
        this._id = id;
    }

    
    @Post("/takeOrder")
    async takeOrder(@Body() order: ITakeOrderRequest): Promise<IOrderBill> {
        var user = await new UserClass().ReturnUserById(this._id);
        console.log(user,"1")
        var UserType = user?.type;
        if (UserType == 'curt') {
            const bill: IOrderBill = <IOrderBill>await new OrderClass().CreateOrder(order, this._id);
            if (!bill)
                throw new CustomError(400, "Cannot create bill/ order",);
            return <IOrderBill>bill;
        } else
            throw new CustomError(403, "Access not allowed", );
    }

    
    @Get("/viewOrders")
    async ViewOrders(): Promise<IGetOrderResponse[]> {
        const orders: IGetOrderResponse[] = <IGetOrderResponse[]>await new OrderClass().GetOrders(this._id);
        if (!orders)
            throw new CustomError(404, "Cannot find Orders",);
        return <IGetOrderResponse[]>orders;
    }

    
    @Put("/updateOrderStatus")
    @SuccessResponse(200, 'Status Updated')
    async UpdateStatus(@Body() order: { _id: string, status: "waiting" | "completed" }): Promise<IOrder> {
        var user = await new UserClass().ReturnUserById(this._id);
        var UserType = user?.type;
        if (UserType == 'admin') {
            const updatedorder = await new OrderClass().UpdateStatus(order);
            if (!updatedorder)
                throw new CustomError(404, "Cannot find and update order status",);
            return <IOrder>updatedorder;
        } else
            throw new CustomError(403, "Access not allowed",);
    }
}