import { Request, Response, Router } from "express";
import AuthAPIService from "../../app/services/api/AuthApiService";
import jwt, { Secret } from "jsonwebtoken";
import { config } from "dotenv";
config();

export const auth = Router();
const SecretJwt = <Secret>process.env.SECRET_JWT;

auth.post("/employee/sign_in", async (req: Request, res: Response) => {
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
});

auth.post("/client/sign_in", async (req: Request, res: Response) => {
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
});
