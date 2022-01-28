import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/categorySevices/UpdateCategoryService";


export class UpdateCategoryController{
    async handle(request: Request, response: Response){
        const {categoryId} = request.params;
        const {name, description} = request.body;
        const service = new UpdateCategoryService();
        const result = await service.execute({categoryId, name, description});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}