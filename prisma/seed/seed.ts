import { PrismaClient } from "@prisma/client";
import { CreateHash } from "../../src/lib/bcrypt";

const prisma = new PrismaClient();

async function main() {
  const employeeis = await prisma.employee.upsert({
    where: { Email: "admim@email.com" },
    update: {},
    create: {
      Email: "admim@email.com",
      Name: "admin",
      Password: CreateHash("root12345"),
      IsAdmin: true,
    },
  });

  console.log(employeeis);
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
