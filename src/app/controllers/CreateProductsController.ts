import { Request, Response } from "express";
import ProductService from "../services/products/ProductService";

export async function CreateProductController(req: Request, res: Response) {
  try {
    await ProductService.executeCreate(req.body);

    console.log(req.body);

    res.status(201);
    return res.redirect("/");
  } catch (error) {
    res.redirect("/?err=2");
  }
}
