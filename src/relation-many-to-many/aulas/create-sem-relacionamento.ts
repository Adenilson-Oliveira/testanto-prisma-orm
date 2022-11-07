import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.aulas.createMany({
    data: [
      {
        titulo: 'Algoritmo',
        description: 'Curso introdutório'
      },
      {
        titulo: 'Curso de lógica de programação',
        description: 'Curso intermediário'
      },
      {
        titulo: 'Tecnologias web',
        description: 'Conheça a base das tecnológias web - Curso intermediário'
      }
    ]

  })

  console.log(result)
}

main()