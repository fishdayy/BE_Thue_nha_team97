import {AppDataSource} from "../data-source";
import {repairTimes} from "../model/repairTimes";

export class RepairTimesService {
    private repairTimesRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.repairTimesRepository = AppDataSource.getRepository(repairTimes);
        })
    }

    getAll = async () => {
        return await this.repairTimesRepository.find()
    }

    create = async (repairTime) => {
        let repairTimeC = await this.repairTimesRepository.save(repairTime);
        return repairTimeC
    }

    remove = async (idDelete) => {
        await this.repairTimesRepository.delete({id: idDelete});
    }

    findByHomeId = async (id) => {
        return await this.repairTimesRepository.findBy({homeId: id})
    }
}