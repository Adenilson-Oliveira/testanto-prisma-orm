import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
  const result = await prisma.matriculas.create({

    // existe diversas maneiras de efetuar esse relacionamento many to many: aqui tem duas e as outras são misturas dessas duas

    // data: {
    //   aula: {
    //     create: {
    //       description: 'alkfdjçl',
    //       titulo: 'alkfjçl',
    //     }
    //   },
    //   estudante: {
    //     create: {
    //       nome: 'lakdfçl',
    //       sobrenome: 'lkajflkf',
    //     }
    //   }
    // }

    data: {
      fk_id_aula: '4b12ef6e-132e-461c-80e6-8dddc80f72eb',
      fk_id_estudante: '4513a4fe-e08e-4664-b0fb-008bf8431424'
    }
  })




  console.log(result)
}

main()