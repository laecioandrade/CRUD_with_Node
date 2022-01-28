import {Router} from "express";
import { CreateCategoryController } from "./controllers/categoryControllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/categoryControllers/DeletecategoryController";
import { GetAllcategoriesController } from "./controllers/categoryControllers/GetAllCategoriesController";
import { UpdateCategoryController } from "./controllers/categoryControllers/UpdateCategoryController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllcategoriesController().handle);
routes.delete("/categories/:categoryId", new DeleteCategoryController().handle);
routes.put("/categories/:categoryId", new UpdateCategoryController().handle);

export {routes};