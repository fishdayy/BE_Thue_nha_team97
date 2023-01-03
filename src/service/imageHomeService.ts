import {AppDataSource} from "../data-source";
import {ImageUrls} from "../model/imageUrls";

export class ImageHomeService {
    private imageHomeRepository: any;

    constructor() {
        AppDataSource.initialize().then(connection => {
            this.imageHomeRepository = AppDataSource.getRepository(ImageUrls);
        })
    }

    getAll = async () => {
        return await this.imageHomeRepository.find()
    }

    getImagesByHomeId = async (id) => {
        return await this.imageHomeRepository.findBy({homeId : id})
    }

    createImageHome = async (imageUrl) => {
        let imageUrlC = await this.imageHomeRepository.save(imageUrl);
        return imageUrlC
    }
}