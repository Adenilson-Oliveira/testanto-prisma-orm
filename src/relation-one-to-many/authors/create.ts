import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: 'Adenilson N Oliveira',
      // books: {
      //   createMany: {
      //     data: [
      //       {
      //         name: 'Como começar na programação',

      //       },
      //       {
      //         name: 'Sendo produtivo!',
      //       },
      //     ],
      //   },
      // },
    },

  })

  console.log(result)

}

main()