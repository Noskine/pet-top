import { Request, Response } from "express";
import { AuthSignInService } from "../services/AuthSignInService";

export async function AuthSignInController(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const employee = await AuthSignInService({
      email: email,
      pass: password,
    });

    //@ts-expect-error
    req.session.UserId = employee?.Id;

    res.redirect("/");
  } catch (error) {
    res.redirect("/auth/login?err=1");
  }
}
