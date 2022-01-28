import { getRepository, Timestamp } from "typeorm";
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