import {Router} from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeletecategoryController";
import { GetAllcategoriesController } from "./controllers/GetAllCategoriesController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllcategoriesController().handle);
routes.delete("/categories/:categoryId", new DeleteCategoryController().handle);

export {routes};