"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairTimesController = void 0;
const repairTimesService_1 = require("../service/repairTimesService");
class RepairTimesController {
    constructor() {
        this.show = async (req, res) => {
            try {
                let repairTimes = await this.repairTimesService.getAll();
                res.json(repairTimes);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.create = async (req, res) => {
            try {
                let { id } = await this.repairTimesService.create(req.body);
                res.json({
                    mess: "Tạo thành công",
                    idRepairTimes: id
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.remove = async (req, res) => {
            try {
                await this.repairTimesService.remove(req.params.id);
                res.json({
                    idRepairTime: req.params.id,
                    mess: "Xóa thành công"
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.findByHomeId = async (req, res) => {
            try {
                let repairTimes = await this.repairTimesService.findByHomeId(req.params.id);
                res.json(repairTimes);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.repairTimesService = new repairTimesService_1.RepairTimesService();
    }
}
exports.RepairTimesController = RepairTimesController;
exports.default = new RepairTimesController();
//# sourceMappingURL=repairTimesController.js.map