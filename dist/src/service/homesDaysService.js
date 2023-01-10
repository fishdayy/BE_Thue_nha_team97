"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomesDaysService = void 0;
const data_source_1 = require("../data-source");
const homesDays_1 = require("../model/homesDays");
class HomesDaysService {
    constructor() {
        this.createHomesDays = async (time, homeId, idContract, idRepairTime) => {
            let homesDays = await this.homesDaysService.insert({ time: time, homeId: homeId, idContract: idContract, idRepairTime: idRepairTime });
            return homesDays;
        };
        this.findByHomesDays = async (id) => {
            let homesDays = await this.homesDaysService.findBy({ homeId: id });
            return homesDays;
        };
        this.findByTime = async (data) => {
            let homesDays = await this.homesDaysService.findBy({ time: data });
            return homesDays;
        };
        this.removeHomesDays = async (id) => {
            let homesDays = await this.homesDaysService.query(`DELETE from homes_days where idContract = ${id}`);
            return homesDays;
        };
        this.removeHomesDays2 = async (id) => {
            let homesDays = await this.homesDaysService.query(`DELETE from homes_days where idRepairTime = ${id}`);
            return homesDays;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.homesDaysService = data_source_1.AppDataSource.getRepository(homesDays_1.HomesDays);
        });
    }
}
exports.HomesDaysService = HomesDaysService;
//# sourceMappingURL=homesDaysService.js.map