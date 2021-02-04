export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
};

export interface CreatePostInputDTO {
    photo: string,
    description: string, 
    type: POST_TYPES
};

export interface PostToDatabase {
    id: string,
    photo: string,
    description: string,
    type: string,
    createdAt: Date,
    authorId: string
};

export const postTypeToString = (
    postType: POST_TYPES
): string => {
    return postType.toLowerCase() === POST_TYPES.EVENT ? "event" : "normal";
};

export const stringToPostType = (
    postType: string
): POST_TYPES => {
    if ( postType.toLowerCase() === "event") {
        return POST_TYPES.EVENT;
    } else if ( postType.toLowerCase() === "normal") {
        return POST_TYPES.NORMAL;
    };

    throw new Error("The valid values for post types are 'normal' ou 'event'");
};