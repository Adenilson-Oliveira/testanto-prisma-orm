import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createCourse() {

  const result = await prisma.courses.create({
    data: {
      name: "Curso de Python",
      duration: 500,
      description: "Curso de Python versão 3 com machine learning e IA",
      teacher: {

        connectOrCreate: {
          where: {
            name: "Adenilson",
          },
          create: {
            name: "Adenilson",
          }
        }

        // # Existe essas outras duas opições ao adicionar um dado relacinado.
        // connect: {
        //   id: 1
        // },
        // create: {
        //   name: "my name"
        // },
      }
    }
  })

  console.log(result)
}

createCourse()