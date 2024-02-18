import { Request, Response } from "express";

export function LoginController(req: Request, res: Response) {
  let IsError = "";

  switch (req.query.err) {
    case "1":
      IsError = "Error ao tentar fazer login";
      break;
    case "2":
      IsError = "Verifique se a senha tem 8 digitos";
      break;
  }

  res.render("login", {
    IsError: IsError,
  });
}
