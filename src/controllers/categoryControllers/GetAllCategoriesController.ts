import { Request, Response } from "express";
import { GetAllCategoriesService } from "../../services/categorySevices/GetAllCategoriesService";

export class GetAllcategoriesController{
    async handle(request: Request, response: Response){
        const service = new GetAllCategoriesService();
        const categories = await service.execute();
        return response.json(categories);
    }
}