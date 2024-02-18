import { Prisma } from "../../../lib/prisma";
import { FindByIdEmployeeInterface, FindOneEmployeeInterface } from "./EmployeeInterfaces";

class ModelEmployee {
  public async FindOne({ Email }: FindOneEmployeeInterface) {
    try {
      const employee = await Prisma.employee.findUnique({
        where: {
          Email,
        },
      });

      return employee;
    } catch (error) {
      throw new Error("Error ao validar dados do usuário");
    }
  }

  public async FindById({ Id }: FindByIdEmployeeInterface) {
    try {
      const employee = await Prisma.employee.findUnique({
        where: {
          Id,
        },
      });

      return employee;
    } catch (error) {
      throw new Error("Error ao validar dados do usuário");
    }
  }
}

export default new ModelEmployee();
