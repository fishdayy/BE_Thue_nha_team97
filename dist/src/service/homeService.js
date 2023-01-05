"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeService = void 0;
const data_source_1 = require("../data-source");
const homes_1 = require("../model/homes");
class HomeService {
    constructor() {
        this.getAll = async () => {
            return await this.homeRepository.findBy({ status: "Available" });
        };
        this.changeStatus = async (id, userId) => {
            let home = await this.homeRepository.findBy({ id: id });
            if (home[0].status === 'Available') {
                await this.homeRepository.update({ id: id }, { status: 'Repair' });
            }
            else {
                await this.homeRepository.update({ id: id }, { status: 'Available' });
            }
            let homes = await this.homeRepository.findBy({ userId: userId });
            return homes;
        };
        this.createHome = async (home) => {
            let homeC = await this.homeRepository.save(home);
            return homeC;
        };
        this.findHomes = async (addressFind, quantityBedroom, quantityBathroom, price) => {
            let homes;
            if (price !== "") {
                homes = await this.homeRepository.query(`select *
                                                     from homes
                                                     where address like '%${addressFind}%'
                                                       AND bedroom like '%${quantityBedroom}%'
                                                       AND bathroom like '%${quantityBathroom}%'
                                                       AND price = '${price}'
                                                       AND status = 'Available'`);
            }
            else {
                homes = await this.homeRepository.query(`select *
                                                     from homes
                                                     where address like '%${addressFind}%'
                                                       AND bedroom like '%${quantityBedroom}%'
                                                       AND bathroom like '%${quantityBathroom}%'
                                                       AND status = 'Available'`);
            }
            return homes;
        };
        this.findById = async (id) => {
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
                                                where homes.id = ${id}
                                                  AND status = 'Available'`);
        };
        this.findListHome = async (id) => {
            return await this.homeRepository.findBy({ userId: id });
        };
        this.findByCategory = async (id) => {
            return await this.homeRepository.findBy({ categoryId: id, status: "Available" });
        };
        this.remove = async (idDelete) => {
            await this.homeRepository.delete({ id: idDelete });
        };
        this.findTop4 = async () => {
            return await this.homeRepository.query(`select h.price, h.id, h.address, h.avatar, contracts.homeId, h.name, COUNT(homeId) as hire
                                                from contracts
                                                         join homes h on contracts.homeId = h.id
                                                group by contracts.homeId
                                                order by hire desc limit 4`);
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            this.homeRepository = data_source_1.AppDataSource.getRepository(homes_1.Homes);
        });
    }
}
exports.HomeService = HomeService;
//# sourceMappingURL=homeService.js.map