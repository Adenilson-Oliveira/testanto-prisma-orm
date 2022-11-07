import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
  const result = await prisma.matriculas.delete({
    where: {
      id: 'a4826a64-6139-4248-b99f-2d0c7c008fb8'
    }
  })

  console.log(result);

}

main() 