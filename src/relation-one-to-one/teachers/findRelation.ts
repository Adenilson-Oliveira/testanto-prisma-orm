import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function findDataWithRelation() {

  const result = await prisma.teachers.findMany({
    include: {
      course: true,

    }
  })

  console.log(result)

}

findDataWithRelation();

