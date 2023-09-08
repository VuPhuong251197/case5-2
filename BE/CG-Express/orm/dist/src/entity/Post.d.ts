import { User } from "./User";
export declare class Post {
    id: number;
    title: string;
    content: string;
    description: string;
    images: string;
    isPrivate: boolean;
    createdDate: string;
    updatedDate: string;
    user: User;
}
