import {AppDataSource} from "../data-source";
import {Comment} from "../model/comment";

export class CommentService{
    private commentRepository: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.commentRepository = AppDataSource.getRepository(Comment);
        })
    }
    getAll = async (id) => {
        return await this.commentRepository.query(`select username,comment from users join comment on comment.userId=users.id where comment.homeId=${id}`)
    }

    createComment = async (comment) => {
        let comments = await this.commentRepository.save(comment);
        return comments
    }
}