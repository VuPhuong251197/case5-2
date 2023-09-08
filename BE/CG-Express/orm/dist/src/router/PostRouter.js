"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostController_1 = __importDefault(require("../controller/PostController"));
const postRouter = (0, express_1.Router)();
postRouter.get("/", PostController_1.default.findAll);
postRouter.get("/:id", PostController_1.default.findById);
postRouter.post("/", PostController_1.default.add);
postRouter.put("/:id", PostController_1.default.update);
postRouter.delete("/:id", PostController_1.default.delete);
exports.default = postRouter;
//# sourceMappingURL=PostRouter.js.map