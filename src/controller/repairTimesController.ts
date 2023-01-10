import {Request, Response} from "express";
import {RepairTimesService} from "../service/repairTimesService";

export class RepairTimesController {
    private repairTimesService: RepairTimesService;

    constructor() {
        this.repairTimesService = new RepairTimesService();
    }

    show = async (req: Request, res: Response) => {
        try {
            let repairTimes = await this.repairTimesService.getAll()
            res.json(repairTimes)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    create = async (req: Request, res: Response) => {
        try {
            let {id} = await this.repairTimesService.create(req.body);
            res.json({
                mess: "Tạo thành công",
                idRepairTimes: id
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    remove = async (req: Request, res: Response) => {
        try {
            await this.repairTimesService.remove(req.params.id)
            res.json({
                idRepairTime: req.params.id,
                mess: "Xóa thành công"
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    findByHomeId = async (req: Request, res: Response) => {
        try {
            let repairTimes = await this.repairTimesService.findByHomeId(req.params.id)
            res.json(repairTimes)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}

export default new RepairTimesController();