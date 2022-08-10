import { users } from "@prisma/client";
import { checkUserRegister, RegisterNewUser } from "../repositories/userRepository.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export type CreateUserData = Omit<users, "id">

export async function registerUser({email, password}: CreateUserData) {
    const userLogin = checkUserRegister(email)
    if(userLogin){
        throw {type: "Email already in use", status: 409}
    }
    const hashPassword = bcrypt.hashSync(password, 10)
    await RegisterNewUser({email, password: hashPassword})
}

export async function singInUser({email, password}: CreateUserData) {
    const check = await checkUserRegister(email)
    if(!check){
        throw {type: "Wrong email", status: 401}
    }

    const passwordCheck = await bcrypt.compare(password, check.password)
    if(!passwordCheck){
        throw {type: "Wrong password", status: 401}
    }

    const JWT = process.env.JWT_TOKEN

    console.log(check, passwordCheck)

    const token = jwt.sign({ email: check.email }, JWT)
    return token
}