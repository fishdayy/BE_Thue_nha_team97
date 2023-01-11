import {AppDataSource} from "../data-source";
import {Contracts} from "../model/contracts";

export class ContractService {
    private contractRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.contractRepository = AppDataSource.getRepository(Contracts);
        })
    }

    getAll = async () => {
        return await this.contractRepository.find()
    }

    createContract = async (contract) => {
        let contractC = await this.contractRepository.save(contract);
        return contractC
    }

    findByUserId = async (id) => {
        return await this.contractRepository.query(`select contracts.id, h.name, totalPrice, contracts.timeStart, contracts.timeEnd, h.id as homeId
                                                    from contracts
                                                             join homes h on contracts.homeId = h.id
                                                    where contracts.userId = ${id};`)
    }

    findByUserCreate = async (id) => {
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
                                                    where h.userId = ${id}`)
    }

    getIncome = async (time, userId) => {
        return await this.contractRepository.query(`select SUM(totalPrice) as income
                                                    from contracts join homes h on contracts.homeId = h.id
                                                    where h.userId = ${userId} AND timeEnd like '${time}%'`)
    }

    remove = async (idDelete) => {
        await this.contractRepository.delete({id: idDelete});
    }
}