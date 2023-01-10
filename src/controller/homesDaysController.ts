import {HomesDaysService} from "../service/homesDaysService";
import {Request, Response} from "express";

export class HomesDaysController {
    private homesDaysService: HomesDaysService

    constructor() {
        this.homesDaysService = new HomesDaysService()
    }

    createHomesDays = async (req: Request, res: Response) => {
        let timeStart = req.body.timeStart
        let timeEnd = req.body.timeEnd
        let homeId = req.body.homeId
        let idContract = req.body.idContract
        let idRepairTime = req.body.idRepairTime
        let dateArray = [];
        let currentDate = new Date(timeStart);
        while (currentDate <= new Date(timeEnd)) {
            dateArray.push(new Date(currentDate));
            currentDate.setUTCDate(currentDate.getUTCDate() + 1);
        }
        for (const item of dateArray) {
            let time = item.toString()
            try {
                await this.homesDaysService.createHomesDays(time, homeId, idContract, idRepairTime);
            } catch (e) {
                res.json({
                    mess: e.message
                })
            }
        }
        res.json({
            time: dateArray
        })
    }

    checkHomesDays = async (req: Request, res: Response) => {
        try {
            let timeStart = req.body.timeStart
            let timeEnd = req.body.timeEnd
            let dateArray = [];
            let currentDate = new Date(timeStart);
            while (currentDate <= new Date(timeEnd)) {
                dateArray.push(new Date(currentDate));
                currentDate.setUTCDate(currentDate.getUTCDate() + 1);
            }
            let homesDays = await this.homesDaysService.findByHomesDays(req.body.homeId)
            let check = true
            for (const item of dateArray) {
                for (const item2 of homesDays) {
                    if (item.toString() === item2.time) {
                        check = false;
                        break;
                    }
                }
            }
            res.json({
                check: check
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    checkTimeHomesDays = async (req: Request, res: Response) => {
        try {
            let timeStart = req.body.timeStart
            let timeEnd = req.body.timeEnd
            let dateArray = [];
            let currentDate = new Date(timeStart);
            while (currentDate <= new Date(timeEnd)) {
                dateArray.push(new Date(currentDate));
                currentDate.setUTCDate(currentDate.getUTCDate() + 1);
            }
            let homeId = []
            for (const item of dateArray) {
                let homesDays = await this.homesDaysService.findByTime(item.toString())
                for (const day of homesDays) {
                    if (!homeId.includes(day.homeId)) {
                        homeId.push(day.homeId)
                    }
                }
            }

            res.json({
                homeId: homeId
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    deleteHomesDays = async (req: Request, res: Response) => {
        try {
            await this.homesDaysService.removeHomesDays(req.params.id)
            res.json({
                mess: "Delete success",
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    deleteHomesDays2 = async (req: Request, res: Response) => {
        try {
            await this.homesDaysService.removeHomesDays2(req.params.id)
            res.json({
                mess: "Delete success",
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}

export default new HomesDaysController();