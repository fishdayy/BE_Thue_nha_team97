import {CommentService} from "../service/commentService";

import {Request, Response} from "express";

export class CommentController{
    private commentService:CommentService

    constructor() {
        this.commentService = new CommentService();
    }
    showComment = async (req: Request, res: Response) => {
        try {
            let comment = await this.commentService.getAll(req.params.id)
            res.json(comment)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    createComment = async (req: Request, res: Response) => {
        try {
            let comment = await this.commentService.createComment(req.body);
            res.json({
                mess: "Comment thành công",
                comment:comment
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}
export default new CommentController();