import { Request, Response } from "express";
declare class ImageHomeController {
    private imageHomeService;
    constructor();
    showImages: (req: Request, res: Response) => Promise<void>;
    showImagesById: (req: Request, res: Response) => Promise<void>;
    createImage: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ImageHomeController;
export default _default;
