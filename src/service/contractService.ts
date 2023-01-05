import {AppDataSource} from "../data-source";
import {Contracts} from "../model/contracts";
import {Homes} from "../model/homes";

export class ContractService {
    private contractRepository: any;
    private homeRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.contractRepository = AppDataSource.getRepository(Contracts);
            this.homeRepository = AppDataSource.getRepository(Homes);
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
        return await this.contractRepository.query(`select h.name, totalPrice, contracts.timeStart, contracts.timeEnd
                                                    from contracts
                                                             join homes h on contracts.homeId = h.id
                                                    where contracts.userId = ${id};`)
    }

    findByUserCreate = async (id) => {
        return await this.contractRepository.query(`select totalPrice, timeStart, timeEnd, contracts.userId, h.name, u.fullName
                                                    from contracts
                                                             join homes h on contracts.homeId = h.id join users u on contracts.userId = u.id
                                                    where h.userId = ${id}`)
    }
}