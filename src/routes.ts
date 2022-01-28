import {Router} from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeletecategoryController";
import { GetAllcategoriesController } from "./controllers/GetAllCategoriesController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllcategoriesController().handle);
routes.delete("/categories/:categoryId", new DeleteCategoryController().handle);
routes.put("/categories/:categoryId", new UpdateCategoryController().handle);

export {routes};