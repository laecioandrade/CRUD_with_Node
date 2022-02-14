import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";
import { Video } from "../../entities/Video";

export class DeleteCategoryService {
    async execute(categoryId: string){
        const repo = getRepository(Category);
        const repoVideo = getRepository(Video);

        if(!await repo.findOne(categoryId)){
            return new Error("Category does not exists!!");
        }

        if(!await repoVideo.findOne(categoryId)){
            return new Error("The category is being used by videos!");
        }
        await repo.delete(categoryId);        
    }
}