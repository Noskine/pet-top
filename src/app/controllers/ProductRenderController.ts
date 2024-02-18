import { Request, Response } from "express";
import ProductService from "../services/products/ProductService";

export async function ProductRenderController(req: Request, res: Response) {
  try {
    const render = await ProductService.executeRender();

    res.status(200).json(render);
  } catch (error) {
    res.status(400).json({ err: "errioer" });
  }
}
