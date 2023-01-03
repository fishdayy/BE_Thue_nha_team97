import {Request, Response} from "express";
import {HomeService} from "../service/homeService";

export class HomeController {
    private homeService: HomeService;

    constructor() {
        this.homeService = new HomeService();
    }

    showHomes = async (req: Request, res: Response) => {
        try {
            let homes = await this.homeService.getAll()
            res.json(homes)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    createHome = async (req: Request, res: Response) => {
        try {
            let {id} = await this.homeService.createHome(req.body);
            res.json({
                mess: "Tạo Home thành công",
                idHome: id
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    findHomes = async (req: Request, res: Response) => {
        try {
            let homes = await this.homeService.findHomes(req.body.address, req.body.bedroom, req.body.bathroom, req.body.price);
            res.json(homes)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    findById = async (req: Request, res: Response) => {
        try {
            let home = await this.homeService.findById(req.params.id);
            res.json(home)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    findListHomeByUserId = async (req: Request, res: Response) => {
        try {
            let homes = await this.homeService.findListHome(req.params.id);
            res.json(homes)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    findByCategory = async (req: Request, res: Response) => {
        try {
            let homes = await this.homeService.findByCategory(req.params.id);
            res.json(homes)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    remove = async (req: Request, res: Response) => {
        try {
            await this.homeService.remove(req.params.id)
            res.json({
                mess: "Xóa Home thành công"
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}

export default new HomeController();