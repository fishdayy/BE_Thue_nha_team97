import {Request, Response} from "express";
import {ImageHomeService} from "../service/imageHomeService";

class ImageHomeController {

    private imageHomeService: ImageHomeService;

    constructor() {
        this.imageHomeService = new ImageHomeService();
    }

    showImages = async (req: Request, res: Response) => {
        try {
            let images = await this.imageHomeService.getAll()
            res.json(images)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    showImagesById = async (req: Request, res: Response) => {
        try {
            let images = await this.imageHomeService.getImagesByHomeId(req.params.id)
            res.json(images)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    createImage = async (req: Request, res: Response) => {
        try {
            let {idImage} = await this.imageHomeService.createImageHome(req.body);
            res.json({
                mess: "Tạo ImageHome thành công",
                idImage: idImage
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}

export default new ImageHomeController()