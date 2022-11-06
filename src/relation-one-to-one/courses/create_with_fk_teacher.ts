// ed625aeb-806c-42ce-ad49-ee3ade08ce80

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createCourse() {

  const result = await prisma.courses.create({
    data: {
      name: "Curso de JavaScript",
      duration: 40,
      description: "Excelente recomendação de primeiro curso para programação",
      fk_id_teacher: 'ed625aeb-806c-42ce-ad49-ee3ade08ce80',
    }
  })

  console.log(result)
}

createCourse()