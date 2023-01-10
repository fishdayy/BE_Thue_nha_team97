"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const commentService_1 = require("../service/commentService");
class CommentController {
    constructor() {
        this.showComment = async (req, res) => {
            try {
                let comment = await this.commentService.getAll(req.params.id);
                res.json(comment);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.createComment = async (req, res) => {
            try {
                let comment = await this.commentService.createComment(req.body);
                res.json({
                    mess: "Comment thành công",
                    comment: comment
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.commentService = new commentService_1.CommentService();
    }
}
exports.CommentController = CommentController;
exports.default = new CommentController();
//# sourceMappingURL=commentController.js.map