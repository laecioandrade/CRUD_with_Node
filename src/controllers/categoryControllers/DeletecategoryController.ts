import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/categorySevices/DeleteCategoryService";

export class DeleteCategoryController {
    async handle(request: Request ,response: Response){
        const {categoryId} = request.params;
        const service = new DeleteCategoryService();
        const result = await service.execute(categoryId);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        return response.status(200).end();
    }
}