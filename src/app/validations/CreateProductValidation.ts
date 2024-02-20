import { zod } from "../../lib/zod";
import { NextFunction, Request, Response } from "express";

const schema = zod.object({
  name: zod.string(),
  description: zod.string(),
  image: zod.string(),
  category: zod.string(),
});

export default function CreateProductValidation(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const valid = schema.safeParse(req.body);
  if (!valid.success) {
    return res.redirect("/?err=3");
  }
  next();
}
