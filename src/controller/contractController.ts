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


}

export default new ContractController();