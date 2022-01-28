import { getRepository } from "typeorm";
import { Video } from "../../entities/Video";

export class DeleteVideoService {
    async execute(videoId: string){
        const repo = getRepository(Video);
        if(!await repo.findOne(videoId)){
            return new Error("Video does not exists!");
        }
        await repo.delete(videoId);
    }

}