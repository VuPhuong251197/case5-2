"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("../entity/Post");
const data_source_1 = require("../data-source");
class PostService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(Post_1.Post);
        this.add = async (data) => {
            data.createdDate = new Date();
            data.updatedDate = new Date();
            return await this.repository.save(data);
        };
        this.delete = async (id) => {
            return await this.repository.delete(id);
        };
        this.update = async (id, data) => {
            data.updatedDate = new Date();
            return await this.repository.update(id, data);
        };
        this.findAll = async (userId, requesterId) => {
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
        };
        this.findById = async (id) => {
            return await this.repository.find({
                where: {
                    id: id
                }
            });
        };
    }
}
exports.default = new PostService();
//# sourceMappingURL=PostService.js.map