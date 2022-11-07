import { PrismaClient, Prisma, Rifas } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {

  const result = await prisma
    .$queryRaw<Rifas[]>(Prisma.sql`SELECT * FROM rifas WHERE vendido=false ORDER BY RANDOM() LIMIT 5`)

  console.log(result)

}

main() 