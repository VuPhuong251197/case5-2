"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRouter_1 = __importDefault(require("./UserRouter"));
const PostRouter_1 = __importDefault(require("./PostRouter"));
const router = (0, express_1.Router)();
router.use('/', UserRouter_1.default);
router.use('/posts', PostRouter_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map