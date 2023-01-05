"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractController = void 0;
const contractService_1 = require("../service/contractService");
class ContractController {
    constructor() {
        this.showContracts = async (req, res) => {
            try {
                let contracts = await this.contractService.getAll();
                res.json(contracts);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.createContract = async (req, res) => {
            try {
                let { id } = await this.contractService.createContract(req.body);
                res.json({
                    mess: "Tạo Contract thành công",
                    idContract: id
                });
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.findByUserId = async (req, res) => {
            try {
                let contracts = await this.contractService.findByUserId(req.params.id);
                res.json(contracts);
            }
            catch (e) {
                res.json({
                    mess: e.message
                });
            }
        };
        this.contractService = new contractService_1.ContractService();
    }
}
exports.ContractController = ContractController;
exports.default = new ContractController();
//# sourceMappingURL=contractController.js.map