import {Request, Response} from "express";
import {ContractService} from "../service/contractService";

export class ContractController {
    private contractService: ContractService;

    constructor() {
        this.contractService = new ContractService();
    }

    showContracts = async (req: Request, res: Response) => {
        try {
            let contracts = await this.contractService.getAll()
            res.json(contracts)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    createContract = async (req: Request, res: Response) => {
        try {
            let {id} = await this.contractService.createContract(req.body);
            res.json({
                mess: "Tạo Contract thành công",
                idContract: id
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    findByUserId = async (req: Request, res: Response) => {
        try {
            let contracts = await this.contractService.findByUserId(req.params.id)
            res.json(contracts)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    findByUserCreate = async (req: Request, res: Response) => {
        try {
            let contracts = await this.contractService.findByUserCreate(req.params.id)
            res.json(contracts)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    getIncome = async (req: Request, res: Response) => {
        try {
            let income = await this.contractService.getIncome(req.body.timeFind, req.params.id)
            res.json(income)
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }

    remove = async (req: Request, res: Response) => {
        try {
            await this.contractService.remove(req.params.id)
            res.json({
                idContract: req.params.id,
                mess: "Xóa Contract thành công"
            })
        } catch (e) {
            res.json({
                mess: e.message
            })
        }
    }
}

export default new ContractController();