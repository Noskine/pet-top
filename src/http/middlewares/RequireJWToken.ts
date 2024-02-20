import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { NextFunction, Request, Response } from "express";
config();
const JWSecret = <jwt.Secret>process.env.JWSecret;

export async function RequireJwToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "not authorization",
    });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedJWT = jwt.verify(token, JWSecret);
    res.locals.jwt = decodedJWT;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid token",
    });
  }
}
