"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractService = void 0;
const data_source_1 = require("../data-source");
const contracts_1 = require("../model/contracts");
class ContractService {
    constructor() {
        this.getAll = async () => {
            return await this.contractRepository.find();
        };
        this.createContract = async (contract) => {
            let contractC = await this.contractRepository.save(contract);
            return contractC;
        };
        this.findByUserId = async (id) => {
            return await this.contractRepository.query(`select contracts.id, h.name, totalPrice, contracts.timeStart, contracts.timeEnd, h.id as homeId
                                                    from contracts
                                                             join homes h on contracts.homeId = h.id
                                                    where contracts.userId = ${id};`);
        };
        this.findByUserCreate = async (id) => {
            return await this.contractRepository.query(`select totalPrice,
                                                           timeStart,
                                                           timeEnd,
                                                           contracts.userId,
                                                           h.name,
                                                           u.fullName,
                                                           h.id as homeId
                                                    from contracts
                                                             join homes h on contracts.homeId = h.id
                                                             join users u on contracts.userId = u.id
                                                    where h.userId = ${id}`);
        };
        this.getIncome = async (time, userId) => {
            return await this.contractRepository.query(`select SUM(totalPrice) as income
                                                    from contracts join homes h on contracts.homeId = h.id
                                                    where h.userId = ${userId} AND timeEnd like '${time}%'`);
        };
        this.remove = async (idDelete) => {
            await this.contractRepository.delete({ id: idDelete });
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.contractRepository = data_source_1.AppDataSource.getRepository(contracts_1.Contracts);
        });
    }
}
exports.ContractService = ContractService;
//# sourceMappingURL=contractService.js.map