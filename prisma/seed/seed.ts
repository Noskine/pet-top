import { PrismaClient } from "@prisma/client";
import { CreateHash } from "../../src/lib/bcrypt";

const prisma = new PrismaClient();

async function main() {
  const email = "admim@email.com";

  const employeeis = await prisma.employee.upsert({
    where: { Email: "admim@email.com" },
    update: {},
    create: {
      Email: email,
      Name: "admin",
      Password: CreateHash("root12345"),
      IsAdmin: true,
    },
  });

  const categorys = await prisma.category.createMany({
    data: [
      {
        Name: "cuidados com os pelos",
      },
      {
        Name: "veterinária",
      },
      {
        Name: "rações e alimentos",
      },
    ],
  });

  const client = await prisma.client.create({
    data: {
      Email: "gaba.co@gmail.com",
      Name: "Gaby Alvez",
      Password: CreateHash("root12345"),  
    }
  })

  console.log(
    `Create::\n\n ${JSON.stringify(employeeis)}\n\n ${JSON.stringify(
      categorys
    )}\n\n
    ${JSON.stringify(client)}`
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
