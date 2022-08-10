import { db } from "../app/database.js";
import { CreateUserData } from "../services/userService.js";

export async function checkUserRegister(email: string) {
    return await db.users.findUnique({
        where: {email}
    })
}

export async function RegisterNewUser(createUserData: CreateUserData) {
    return await db.users.create({data: createUserData})
}