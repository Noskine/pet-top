import { Router } from "express";
import { HomePageController } from "../app/controllers/home/HomePageController";
import { CreateProductController } from "../app/controllers/CreateProductsController";
import CreateProductValidation from "../app/validations/CreateProductValidation";
import { ProductRenderController } from "../app/controllers/ProductRenderController";

const Routes = Router();

Routes.get("/", HomePageController);

Routes.get("/api/product", ProductRenderController);
Routes.post("/api/product", CreateProductValidation, CreateProductController);

export default Routes;