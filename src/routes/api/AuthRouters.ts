import { Request, Response, Router } from "express";
import AuthAPIService from "../../app/services/api/AuthApiService";
import jwt, { Secret } from "jsonwebtoken";
import AuthApiService from "../../app/services/api/AuthApiService";
import CreateClientValidation from "../../app/validations/api/CreateClientValidation";
import SignInValidators from "../../app/validations/api/signInValidators";

import { config } from "dotenv";
config();

export const auth = Router();
const SecretJwt = <Secret>process.env.SECRET_JWT;

auth.post(
  "/employee/sign_in",
  [SignInValidators],
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const employee = await AuthAPIService.employeeSign_in({
        email: email,
        pass: password,
      });

      const contentJWT = {
        employee: employee,
      };

      const token = jwt.sign(contentJWT, SecretJwt, { expiresIn: "2 days" });

      //@ts-ignore
      employee.token = token;
      return res.json({ employee });
    } catch (error) {
      res.status(400).json({
        message: "Error when trying to sign_in",
      });
    }
  }
);

auth.post(
  "/client/sign_in",
  [SignInValidators],
  async (req: Request, res: Response) => {
  try {
      const { email, password } = req.body;

      const client = await AuthAPIService.clientSign_in({
        email: email,
        pass: password,
      });

      const contentJWT = {
        client: client,
      };

      const token = jwt.sign(contentJWT, SecretJwt, { expiresIn: "2 days" });

      //@ts-ignore
      client.token = token;
      return res.json({ client });
    } catch (error) {
      res.status(400).json({
        message: "Error when trying to sign_in",
      });
    }
  });

auth.post(
  "/client/registration",
  [CreateClientValidation],
  async (req: Request, res: Response) => {
    const { email, password, name } = req.body;

    const client = await AuthApiService.createClientService({
      email,
      password,
      name,
    });

    return res.json({
      message: "Cliente registrado com sucesso",
      clienteID: client.Id,
    });
  }
);
