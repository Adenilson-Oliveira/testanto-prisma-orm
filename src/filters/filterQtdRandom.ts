import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {

  const result = await prisma.number.findMany({


  })

  console.log(result)

}

main()