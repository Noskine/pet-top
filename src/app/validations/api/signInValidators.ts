import { zod } from "../../../lib/zod";
import { NextFunction, Request, Response } from "express";

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
});

export default function SignInValidators(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const valid = schema.safeParse(req.body);
  if (!valid.success) {
    return res.status(400).json({
        message: "Error when trying to sign_in",
        error: valid.error.message,
    });
  }
  next();
}