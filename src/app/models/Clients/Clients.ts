import e from "express";
import { Prisma } from "../../../lib/prisma";
import {
  DataCreateInterface,
  DataFindByEmailInterface,
} from "./clientsInterfaces";

class ModelClients {
  public async findByEmail({ email }: DataFindByEmailInterface) {
    const client = await Prisma.client.findUnique({
      where: {
        Email: email,
      },
    });

    return client;
  }

  public async create({ email, pass, name }: DataCreateInterface) {
    const client = await Prisma.client.create({
      data: {
        Email: email,
        Password: pass,
        Name: name,
      },
    });

    return client;
  }
}

export default new ModelClients();
