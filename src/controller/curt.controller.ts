import CustomError from '../utills/error';

import { Route, Tags, Post, Body, Security } from "tsoa";
import { Controller } from '@tsoa/runtime';
import { IAddCurtRequest } from '../types/request/curt.request';
import { IAddCurtResponse } from '../types/responses/curt.responses';
import { CurtClass } from '../repositories/curt.repository';


@Route('/Curt')
@Tags('Curt')
@Security('api_key')
export class CurtController extends Controller {
    type: string | any;
    constructor(type: string | any) {
        super();
        this.type = type;
    }


    @Post('addcurt')
    async Addcurt(@Body() Curt: IAddCurtRequest): Promise<IAddCurtResponse> {
        var Newcurt: IAddCurtResponse;
        if (this.type == 'admin') {
            Newcurt = <IAddCurtResponse>await new CurtClass().AddCurt(Curt);
            if (!Newcurt)
                throw new CustomError(400, "Cannot add curt", )
            return <IAddCurtResponse>Newcurt;
        } else
            throw new CustomError(403, "Access not allowed", )
    }
}