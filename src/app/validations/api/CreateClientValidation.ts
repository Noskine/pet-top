import { zod } from "../../../lib/zod";
import { NextFunction, Request, Response } from "express";

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  name: zod.string().min(3),
});

export default function CreateClientValidation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const valid = schema.safeParse(req.body);

  if (!valid.success) {
    return res.status(400).json({
      mensage: "Error when registering client",
      Err: valid.error.message
    });
  }
  next();
}
