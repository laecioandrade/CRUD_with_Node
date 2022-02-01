import { getRepository } from "typeorm";
import { Category } from "../../entities/Category";
import { Video } from "../../entities/Video";

type VideoRequest = {
    categoryId: number;
    name: string;
    description: string;
    duration: string;
}

export class CreateVideoService {
    async execute({
        categoryId,
        name, 
        description,
        duration
    }:VideoRequest):Promise<Video | Error> {
        const repo = getRepository(Video);
        const repoCategory = getRepository(Category);

        //Melhorar função
        //.
        //.
        //.
        if(!((new Date('December 25, 1995 '+duration)).getTime()>0)){
            return new Error("Invalid duration!");
        };

        if(!await repoCategory.findOne({categoryId})){
            return new Error("Category does not exists!")
        };

        if(await repo.findOne({name})){
            return new Error("Video already exists");
        }
    
        const video = repo.create({
            categoryId,
            name,
            description,
            duration
        })
        await repo.save(video);
        return video;
        
    }
}