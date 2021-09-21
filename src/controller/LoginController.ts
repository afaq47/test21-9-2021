import custom_Error from '../utills/error';
import { Route, Tags, Post, Body } from "tsoa";
import { UserClass } from "../repositories/user.repository";
import { ILoginRequest } from '../types/request/login.request';
import { ILoginResponse } from '../types/responses/login.responses';
import jwt, { Secret } from "jsonwebtoken";
require('dotenv').config();

@Route('/')
@Tags('Login')
export class LoginController {
    constructor() { }

    

    @Post('/login')
    async login(@Body() user: ILoginRequest): Promise<ILoginResponse> {

        const authuser = await new UserClass().ReturnUser(user);
        console.log(authuser);
        if (!authuser)
            throw new custom_Error(401, "User not verified",);
        return <ILoginResponse>{
            token_key: jwt.sign(JSON.stringify(authuser), <Secret>process.env.TOKEN_KEY),
            message: "Credentials Approved"
        }
    }
}