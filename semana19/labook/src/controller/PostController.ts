import { Request, Response } from 'express';
import { PostBusiness } from "../business/PostBusiness";
import { CreatePostInputDTO } from '../data/model/postModel';

export class PostController extends PostBusiness {

    createPost = async (
        req: Request, 
        res: Response
    ): Promise<void> => {
        try {
            const input: CreatePostInputDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type
            };
     
            const token: string = req.headers.authorization!;
            await PostBusiness.create(token, input);
        
            res.status(201).send({ message: "Post created successfuly" });
     
        } catch (error) {
           let message = error.sqlMessage || error.message
           res.statusCode = 400
     
           res.send({ message });
        };
    };
};