import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {

  const result = await prisma.rifas.findMany({
    orderBy: {
      num: 'asc'
    },
    skip: 2,
    take: 4,
  })

  console.log(result)
}

main()