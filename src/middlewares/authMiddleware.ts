import { Response, Request, NextFunction } from "express";
import Joi from "joi";

export async function checkUserInfo(res: Response, req: Request, next: NextFunction) {
    const signUpValidation = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        repeatPassword: Joi.ref("password")
    })
    const validation = signUpValidation.validate(req.body)
    if(validation.error){
        return res.status(401).send("Wrong infomartion")
    }

    next()
}