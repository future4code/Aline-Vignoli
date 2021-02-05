import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO, SignupInputDTO } from "../data/model/userModel";

export class UserController extends UserBusiness {

    signup = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const input: SignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };
    
            const token: string = await UserBusiness.businessSignup(input);
    
            res.status(201).send({ token });
    
        } catch (error) {
            res.status(400).send({
                message: error.sqlMessage || 
                error.message 
            });
        };
    };
    
    login = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };
    
            const token: string = await UserBusiness.businessLogin(input);
    
            res.status(200).send({ token });
    
        } catch (error) {
            res.status(400).send({
                message: error.sqlMessage || 
                error.message 
            });
        };
    };

    addFriend = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const token: string = req.headers.authorization!;
            const { id } = req.params;

            await UserBusiness.businessAddFriend(token, id);

            res.status(200).send({ message: "Friend added successfuly" });
            
        } catch (error) {
            res.status(400).send({
                message: error.sqlMessage || 
                error.message 
            });
        };
    };

    removeFriend = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const token: string = req.headers.authorization!;
            const { id } = req.params;

            await UserBusiness.businessRemoveFriend(token, id);

            res.status(200).send({ message: "Friend removed successfuly" });

        } catch (error) {
            res.status(400).send({
                message: error.sqlMessage ||
                error.message
            });
        };
    };
};