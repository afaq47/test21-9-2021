import { NextFunction, Request, Response } from 'express-serve-static-core';
import * as jwt from 'jsonwebtoken';
import { IUser } from '../types/document/user.document';
import CustomError from '../utills/error';

const conf = process.env;


export var TokenVerifier = (req: any, res: Response, next: NextFunction) => {
    var token = req.body.token || req.query.token || req.headers["authorization"]?.split(" ")[1];
    if (!token) {
        let err = new CustomError(403, "User token is required/login", )
        next(err);
    } else {
        try {
            const decoded = jwt.verify(token, <jwt.Secret>conf.TOKEN_KEY);
            req.user = <IUser>decoded;
        } catch (err) {
            err = new CustomError(401, "Invalid token in header", );
            next(err);
        }
    }
    next();
}