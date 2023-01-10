"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairTimesService = void 0;
const data_source_1 = require("../data-source");
const repairTimes_1 = require("../model/repairTimes");
class RepairTimesService {
    constructor() {
        this.getAll = async () => {
            return await this.repairTimesRepository.find();
        };
        this.create = async (repairTime) => {
            let repairTimeC = await this.repairTimesRepository.save(repairTime);
            return repairTimeC;
        };
        this.remove = async (idDelete) => {
            await this.repairTimesRepository.delete({ id: idDelete });
        };
        this.findByHomeId = async (id) => {
            return await this.repairTimesRepository.findBy({ homeId: id });
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.repairTimesRepository = data_source_1.AppDataSource.getRepository(repairTimes_1.repairTimes);
        });
    }
}
exports.RepairTimesService = RepairTimesService;
//# sourceMappingURL=repairTimesService.js.map