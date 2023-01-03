import {AppDataSource} from "../data-source";
import {Homes} from "../model/homes";

export class HomeService {
    private homeRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.homeRepository = AppDataSource.getRepository(Homes);
        })
    }

    getAll = async () => {
        return await this.homeRepository.find()
    }

    createHome = async (home) => {
        let homeC = await this.homeRepository.save(home);
        return homeC
    }

    findHomes = async (addressFind, quantityBedroom, quantityBathroom, price) => {
        let homes
        if (price !== "") {
            homes = await this.homeRepository.query(`select *
                                                     from homes
                                                     where address like '%${addressFind}%'
                                                       AND bedroom like '%${quantityBedroom}%'
                                                       AND bathroom like '%${quantityBathroom}%'
                                                       AND price = '${price}'`)
        } else {
            homes = await this.homeRepository.query(`select *
                                                     from homes
                                                     where address like '%${addressFind}%'
                                                       AND bedroom like '%${quantityBedroom}%'
                                                       AND bathroom like '%${quantityBathroom}%'`)
        }

        return homes
    }

    findById = async (id) => {
        return await this.homeRepository.query(`select homes.id,
                                                       homes.name,
                                                       price,
                                                       address,
                                                       description,
                                                       c.name as category,
                                                       bedroom,
                                                       bathroom,
                                                       status,
                                                       userId,
                                                       avatar
                                                from homes
                                                         join categories c on homes.categoryId = c.id
                                                where homes.id = ${id}`)
    }

    findListHome = async (id) => {
        return await this.homeRepository.findBy({userId: id})
    }

    findByCategory = async (id) => {
        return await this.homeRepository.findBy({categoryId: id})
    }

    remove = async (idDelete) => {
        await this.homeRepository.delete({id: idDelete});
    }
}