import { Router } from "express";
import { LoginController } from "../../app/controllers/LoginController";
import { AuthSignInController } from "../../app/controllers/AuthSignInController";
import FormValidation from "../../app/validations/FormValidation";

const AuthRoutes = Router();

AuthRoutes.get("/login", LoginController);

AuthRoutes.post("/sign_in", [FormValidation], AuthSignInController);

AuthRoutes.get("/sign_out", (req, res) => {
  req.session = null;
  res.redirect("/");
});

export default AuthRoutes;
