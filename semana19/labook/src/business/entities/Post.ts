import { POST_TYPES } from "../../data/model/postModel";

export class Post {

    constructor (
        public readonly id: string,
        public readonly photo: string,
        public readonly description: string,
        public readonly type: POST_TYPES,
        public readonly createdAt: Date,
        public readonly authorId: string
    ) { };
};