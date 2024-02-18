import { Prisma } from "../../../lib/prisma";
import { CreateProductInterface } from "./ProductInterfaces";

class ModelProduct {
  public async create({
    Name,
    Description,
    Photo,
    Price,
    CategoryId,
  }: CreateProductInterface) {
    try {
      const product = await Prisma.product.create({
        data: {
          Name,
          Description,
          Photo,
          Price,
          Category: {
            connect: {
              Id: CategoryId,
            },
          },
        },
      });

      return product;
    } catch (error) {
      throw new Error("Error ao criar dados para products");
    }
  }

  public async findAll() {
    try {
      const product = await Prisma.product.findMany({ 
        include: {
          Category: true,
        },
      });

      return product;
    } catch (error) {
      throw new Error("Error ao fazer a requisição de products");
    }
  }

  public async findOne({ Id }: { Id: string }) {
    try {
      const product = await Prisma.product.findUnique({
        where: {
          Id,
        },
      });

      return product;
    } catch (error) {
      throw new Error("Error ao fazer a requisição unica de products");
    }
  }
}

export default new ModelProduct();
