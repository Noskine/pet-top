import { Prisma } from "../../../lib/prisma";

class ModelCategory {
  public async findAll() {
    try {
      return await Prisma.category.findMany({
        select: {
          Id: true,
          Name: true,
        },
      });
    } catch (error) {
      throw new Error("Erro ao buscar as categorias");
    }
  }
}

export default new ModelCategory();
