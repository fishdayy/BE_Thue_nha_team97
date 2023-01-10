"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const data_source_1 = require("../data-source");
const comment_1 = require("../model/comment");
class CommentService {
    constructor() {
        this.getAll = async (id) => {
            return await this.commentRepository.query(`select username,comment,avatar from users join comment on comment.userId=users.id where comment.homeId=${id}`);
        };
        this.createComment = async (comment) => {
            let comments = await this.commentRepository.save(comment);
            return comments;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.commentRepository = data_source_1.AppDataSource.getRepository(comment_1.Comment);
        });
    }
}
exports.CommentService = CommentService;
//# sourceMappingURL=commentService.js.map