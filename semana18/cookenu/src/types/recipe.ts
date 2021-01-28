export type recipe = {
    id: string,
    title: string,
    description: string,
    createdAt: string,
    userId: string
};
 
 export const toRecipeModel = (object: any) : recipe => {
    const recipe = {
       id: object.id,
       title: object.title,
       description: object.description,
       createdAt: object.createdAt,
       userId: object.userId
    };
 
    return recipe;
};