import { zod } from "../../lib/zod";
import { NextFunction, Request, Response } from "express";

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
});

export default function FormValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const valid = schema.safeParse(req.body);
  if (!valid.success) {
    return res.redirect("/auth/login?err=2");
  }
  next();
}
