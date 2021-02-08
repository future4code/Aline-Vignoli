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
            res.status(error.statusCode || 400).send({
                message: error.sqlMessage || 
                error.message 
            });
        };
    };

    getPostById = async (
        req: Request, 
        res: Response
    ): Promise<void> => {
        try {
            const { id } = req.params;
            const token: string = req.headers.authorization!;

            const post = await PostBusiness.getPostById(token, id);
        
            res.status(200).send({ post });
        
        } catch (error) {
            res.status(error.statusCode || 400).send({
                message: error.sqlMessage || 
                error.message 
            });
        };          
    };

    getPosts = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const token: string = req.headers.authorization!;
            const posts = await PostBusiness.getPosts(token);
        
            res.status(200).send({ posts });
        
        } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400;
        
            res.send({ message });
        }; 
    };
};