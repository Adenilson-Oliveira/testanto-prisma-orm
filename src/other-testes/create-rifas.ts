import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {

  const result = await prisma.rifas.createMany({
    data: [
      {
        num: 1,
        vendido: true,
      },
      {
        num: 2,
        vendido: false,
      },
      {
        num: 3,
        vendido: true,
      },
      {
        num: 4,
        vendido: true,
      },
      {
        num: 5,
        vendido: false,
      }, {
        num: 6,
        vendido: false,
      }, {
        num: 7,
        vendido: false,
      }, {
        num: 8,
        vendido: false,
      }, {
        num: 9,
        vendido: false,
      }, {
        num: 10,
        vendido: false,
      }, {
        num: 11,
        vendido: false,
      }, {
        num: 12,
        vendido: false,
      }, {
        num: 13,
        vendido: false,
      }, {
        num: 14,
        vendido: false,
      }, {
        num: 15,
        vendido: false,
      },

    ]
  })

  console.log(result)

}

main()