import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
  const result = await prisma.estudantes.findMany({
    where: {
      id: '4513a4fe-e08e-4664-b0fb-008bf8431424'
    },
    include: {
      matriculas: {
        include: {
          aula: true
        }
      }
    }
  })

  console.log(result);
  console.log(result[0].matriculas);
}

main()