import {AppDataSource} from "../data-source";
import {HomesDays} from "../model/homesDays";

export class HomesDaysService {
    private homesDaysService: any

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.homesDaysService = AppDataSource.getRepository(HomesDays)
        })
    }

    createHomesDays = async (time, homeId) => {
        let homesDays = await this.homesDaysService.insert({time: time, homeId: homeId});
        return homesDays
    }
    findByHomesDays = async (id) => {
        let homesDays = await this.homesDaysService.findBy({homeId: id})
        return homesDays
    }
    findByTime = async (data) => {
        let homesDays = await this.homesDaysService.findBy({time: data})
        return homesDays
    }
}