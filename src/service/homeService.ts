import {AppDataSource} from "../data-source";
import {Homes} from "../model/homes";

;
import {HomesDays} from "../model/homesDays";

export class HomeService {
    private homeRepository: any;
    private homesDayRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.homeRepository = AppDataSource.getRepository(Homes);
            this.homesDayRepository = AppDataSource.getRepository(HomesDays)
        })
    }

    getAll = async () => {
        return await this.homeRepository.findBy({status: "Available"})
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
                                                       AND price = '${price}'
                                                       AND status = 'Available'`)
        } else {
            homes = await this.homeRepository.query(`select *
                                                     from homes
                                                     where address like '%${addressFind}%'
                                                       AND bedroom like '%${quantityBedroom}%'
                                                       AND bathroom like '%${quantityBathroom}%'
                                                       AND status = 'Available'`)
        }

        return homes
    }

    findById = async (id) => {
        return await this.homeRepository.query(`select homes.id,
                                                       homes.name,
                                                       price,
                                                       address,
                                                       description,
                                                       homes.categoryId,
                                                       c.name as category,
                                                       bedroom,
                                                       bathroom,
                                                       status,
                                                       userId,
                                                       avatar,
                                                       star
                                                from homes
                                                         join categories c on homes.categoryId = c.id
                                                where homes.id = ${id}`)
    }

    findListHome = async (id) => {
        return await this.homeRepository.findBy({userId: id})
    }

    findByCategory = async (id) => {
        return await this.homeRepository.findBy({categoryId: id, status: "Available"})
    }

    remove = async (idDelete) => {
        await this.homeRepository.delete({id: idDelete});
    }

    findTop4 = async () => {
        return await this.homeRepository.query(`select h.price,
                                                       h.id,
                                                       h.status,
                                                       h.address,
                                                       h.avatar,
                                                       contracts.homeId,
                                                       h.name,
                                                       COUNT(homeId) as hire
                                                from contracts
                                                         join homes h on contracts.homeId = h.id
                                                where h.status = "Available"
                                                group by contracts.homeId
                                                order by hire desc limit 4`)
    }

    editHome = async (idEdit, newHome) => {
        await this.homeRepository.update({id: idEdit}, newHome)
    }

    findHomesByTime = async (homeIds) => {
        let listHomeId = await this.homeRepository.query(`select id
                                                          from homes
                                                          where status = "Available"`)
        let homeIdFind = []
        for (let i = 0; i < listHomeId.length; i++) {
            if (!homeIds.includes(listHomeId[i].id)) {
                homeIdFind.push(listHomeId[i])
            }
        }
        let homes = await this.homeRepository.findBy({status: "Available"})
        let homesFind = []
        for (let i = 0; i < homes.length; i++) {
            for (let j = 0; j < homeIdFind.length; j++) {
                if (homes[i].id === homeIdFind[j].id) {
                    homesFind.push(homes[i])
                }
            }
        }
        return homesFind
    }

    getStar = async (id) => {
        await this.homeRepository.query(`UPDATE homes
                                                set homes.star = (select AVG(star)
                                                                  from comment
                                                                  where star <> 0
                                                                    AND homeId = ${id})
                                                where homes.id = ${id}`)
        let home = await this.homeRepository.query(`select homes.id,
                                                       homes.name,
                                                       price,
                                                       address,
                                                       description,
                                                       homes.categoryId,
                                                       c.name as category,
                                                       bedroom,
                                                       bathroom,
                                                       status,
                                                       userId,
                                                       avatar,
                                                       star
                                                from homes
                                                         join categories c on homes.categoryId = c.id
                                                where homes.id = ${id}`)
        return home
    }
}