import { task } from "../../business/entities/task";

export type createTaskInputDT0 = {
    title: string,
    description: string,
    deadline: string,
    authorId: string
};

export const toTaskModel = (obj: any) : task => {
    return obj && {
        id: obj.id,
        title: obj.title,
        description: obj.description,
        deadline: obj.deadline,
        authorId: obj.author_id
    };
};