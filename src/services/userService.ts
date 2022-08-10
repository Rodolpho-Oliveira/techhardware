import { users } from "@prisma/client";
import { checkUserRegister, RegisterNewUser } from "../repositories/userRepository.js";
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