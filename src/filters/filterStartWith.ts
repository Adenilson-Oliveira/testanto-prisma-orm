import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {

  const result = await prisma.books.findMany({
    where: {
      name: {
        startsWith: 'sendo',

        // o mode insensitive serve para buscarmos independent se é maisusculo o minusculo
        mode: 'insensitive'
      }
    }
  })

  console.log(result)

}

main()