import { Request, Response } from "express";
import { CategoryRender } from "../../services/RenderCategory";
import ProductService from "../../services/products/ProductService";

export async function HomePageController(req: Request, res: Response) {
  let errProduct = "";
  const categories = await CategoryRender();

  switch (req.query.err) {
    case "productErr":
      errProduct = "Error ao validar dados na criação do produto";
  }

  res.render("index", {
    CategoryRender: categories,
    Products: await ProductService.executeRender(),
    IsErrorCreateProduct: errProduct,
  });
}
