import { Service } from "./Service";
import { Post } from "../entity/Post";
declare class PostService implements Service<Post> {
    private repository;
    add: (data: any) => Promise<any>;
    delete: (id: any) => Promise<import("typeorm").DeleteResult>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    findAll: (userId?: number, requesterId?: number) => Promise<Post[]>;
    findById: (id: any) => Promise<Post[]>;
}
declare const _default: PostService;
export default _default;
