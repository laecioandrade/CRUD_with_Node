import { response } from "express";
import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
    categoryId: string;
    name: string;
    description: string;
};

export class UpdateCategoryService{
    async execute({categoryId, name, description}: CategoryUpdateRequest){
        const repo = getRepository(Category);

        const category = await repo.findOne(categoryId);

        if(!category){
            return new Error("category does not exists!");
        }

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;
        
        await repo.save(category);

        return  category;
    }
}