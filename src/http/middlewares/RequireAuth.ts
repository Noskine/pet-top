import { NextFunction, Request, Response } from "express";
import Employee from "../../app/models/Employee/Employee";

export default async function RequireAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //@ts-expect-error
  const userId = req.session!.UserId;

  if (!userId) {
    return res.redirect("/auth/login");
  }

  const employee = await Employee.FindById({ Id: userId });

  const r = res.locals.employee = employee;

  next();
}
