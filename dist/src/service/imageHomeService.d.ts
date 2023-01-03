export declare class ImageHomeService {
    private imageHomeRepository;
    constructor();
    getAll: () => Promise<any>;
    getImagesByHomeId: (id: any) => Promise<any>;
    createImageHome: (imageUrl: any) => Promise<any>;
}
