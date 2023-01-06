"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomesDaysController = void 0;
const homesDaysService_1 = require("../service/homesDaysService");
class HomesDaysController {
    constructor() {
        this.createHomesDays = async (req, res) => {
            let timeStart = req.body.timeStart;
            let timeEnd = req.body.timeEnd;
            let homeId = req.body.homeId;
            let dateArray = [];
            let currentDate = new Date(timeStart);
            while (currentDate <= new Date(timeEnd)) {
                dateArray.push(new Date(currentDate));
                currentDate.setUTCDate(currentDate.getUTCDate() + 1);
            }
            for (const item of dateArray) {
                let time = item.toString();
                try {
                    await this.homesDaysService.createHomesDays(time, homeId);
                }
                catch (e) {
                    res.json({
                        mess: e.message
                    });
                }
            }
            res.json({
                time: dateArray
            });
        };
        this.checkHomesDays = async (req, res) => {
            try {
                let timeStart = req.body.timeStart;
                let timeEnd = req.body.timeEnd;
                let dateArray = [];
                let currentDate = new Date(timeStart);
                while (currentDate <= new Date(timeEnd)) {
                    dateArray.push(new Date(currentDate));
                    currentDate.setUTCDate(currentDate.getUTCDate() + 1);
                }
                let homesDays = await this.homesDaysService.findByHomesDays(req.body.homeId);
                let check = true;
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
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.checkTimeHomesDays = async (req, res) => {
            try {
                let timeStart = req.body.timeStart;
                let timeEnd = req.body.timeEnd;
                let dateArray = [];
                let currentDate = new Date(timeStart);
                while (currentDate <= new Date(timeEnd)) {
                    dateArray.push(new Date(currentDate));
                    currentDate.setUTCDate(currentDate.getUTCDate() + 1);
                }
                let homeId = [];
                for (const item of dateArray) {
                    let homesDays = await this.homesDaysService.findByTime(item.toString());
                    for (const day of homesDays) {
                        if (!homeId.includes(day.homeId)) {
                            homeId.push(day.homeId);
                        }
                    }
                }
                res.json({
                    homeId: homeId
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.homesDaysService = new homesDaysService_1.HomesDaysService();
    }
}
exports.HomesDaysController = HomesDaysController;
exports.default = new HomesDaysController();
//# sourceMappingURL=homesDaysController.js.map