import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Código limpo",
      fk_id_author: 'a65d854b-7028-4cdf-bd5d-0b02f09b14fd'


      // authors: {
      //   connectOrCreate: {
      //     where: {
      //       name: 'Robert C. Martin',
      //     },
      //     create: {
      //       name: 'Robert C. Martin',
      //     }
      //   }
      // }
    }
  })

  console.log(result)
}

main()