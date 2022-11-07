import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {

  const result = await prisma.books.findMany({
    where: {
      OR: [
        {
          name: {
            contains: "LIMPO",
            mode: 'insensitive',
          }
        },
        {
          name: {
            contains: 'sendo',
            mode: 'insensitive',
          }
        }
      ],
      AND: {

        name: {
          contains: '!',
          mode: 'insensitive',
        }

      },


    },

    include: {
      authors: true,
    }




  })

  console.log(result)

}

main()