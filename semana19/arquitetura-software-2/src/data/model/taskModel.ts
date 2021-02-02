import { task } from "../../business/entities/task";

export const toTaskModel = (obj: any) : task => {
    return {
        id: obj.id,
        title: obj.title,
        description: obj.description,
        deadline: obj.deadline,
        authorId: obj.author_id
    };
};