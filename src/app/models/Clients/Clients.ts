import { Prisma } from "../../../lib/prisma";

class ModelClients {
    public async findByEmail({email}:{email: string}) {
        try {
            const client = await Prisma.client.findUnique({
              where: {
                Email: email,
              },
            });
      
            return client;
          } catch (error) {
            throw new Error("Error ao validar dados do usuário");
          }
        }
  }

export default new ModelClients();
  