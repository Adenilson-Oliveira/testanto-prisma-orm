import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  // SELECT * FROM COURSES LIMIT 1
  // const result = await prisma.courses.findFirst()

  // seleciona de acordo a o criação porem orderBy decrecenste
  // const result = await prisma.courses.findFirst({
  //   orderBy: { created_at: 'desc' },
  // })


  // seleciona o primeiro que satisfaça a condição se nenhum satisfazer ele retorna null
  const result = await prisma.courses.findFirst({
    where: {
      // duration: 30
      name: {
        contains: 'CS'
      }
    }
  })

  console.log(result)
}

main()