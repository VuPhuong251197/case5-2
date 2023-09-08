import { Service } from "./Service";
import { Post } from "../entity/Post";
import { AppDataSource } from "../data-source";

class PostService implements Service<Post> {
    private repository = AppDataSource.getRepository(Post);

    add = async (data: any) => {
        data.createdDate = new Date();
        data.updatedDate = new Date();
        return await this.repository.save(data);
    };

    delete = async (id: any) => {
        return await this.repository.delete(id);
    };

    update = async (id: any, data: any) => {
        data.updatedDate = new Date();
        return await this.repository.update(id, data);
    }

    /**
     * 
     * @param userId - post author id
     * @param requesterId - current logged-in user id 
     * @returns 
     */
    findAll = async (userId?: number, requesterId?: number) => {
        // All PUBLIC posts of all users
        if (!userId) {
            return await this.repository.find({
                relations: {
                    user: true
                },
                where: {
                    isPrivate: false
                }
            });
        }
        // All PUBLIC + PRIVATE posts of an author
        else if (userId === requesterId) {
            return await this.repository.find({
                relations: {
                    user: true
                },
                where: {
                    user: {
                        id: userId
                    }
                }
            });
        } 
        // All PUBLIC posts when a user seeing an author profile
        // else {
        //     return await this.repository.find({
        //         relations: {
        //             user: true
        //         },
        //         where: {
        //             user: {
        //                 id: userId,
        //             },
        //             isPrivate: false
        //         }
        //     });
        // }
    }

    findById = async (id: any) => {
        return await this.repository.find({
            where: {
                id: id
            }
        });
    };
}

export default new PostService();