// Package by feature

import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {

    constructor(
        private createUserUserCase: CreateUserUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body

        try {
            await this.createUserUserCase.execute({ email, name, password })

            return response.status(201).send()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || "Unexpected Error"
            })         
        }
    }
}