import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: '6ce82f57-bcb4-49c9-8eb2-b65793671f76'
    },
    data: {
      duration: 70,
      name: 'Stitches'
    }
  })

  console.log(result)
}

main()