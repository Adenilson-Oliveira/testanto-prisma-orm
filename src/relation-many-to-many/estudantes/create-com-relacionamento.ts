import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.estudantes.create({
    data: {
      nome: 'Joãozinho',
      sobrenome: 'Nogueira Oliveira',
      matriculas: {
        createMany: {
          data: [
            {
              fk_id_aula: 'bef4e219-1488-4a05-9a27-7afc6ca5e598',
            },
            {
              fk_id_aula: '568aeb88-ce24-49c3-ad93-f75b611d6c06'
            },
          ]
        }

      }
    }

  })




  console.log(result)
}

main()