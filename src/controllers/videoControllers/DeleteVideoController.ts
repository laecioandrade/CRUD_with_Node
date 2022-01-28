import { Request, Response } from "express";
import { DeleteVideoService } from "../../services/videoServices/DeleteVideoService";


export class DeleteVideoController {
    async handle(request: Request, response: Response){
        const {videoId} = request.params;
        const service = new DeleteVideoService();
        const result = await service.execute(videoId);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }
        return response.status(200).end();
    }
}