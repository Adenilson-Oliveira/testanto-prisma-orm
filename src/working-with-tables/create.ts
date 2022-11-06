import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  // mudamos o schema dos models(tables) para models com relacionamento por isso esse create de antes estava dando erros


  // const result = await prisma.courses.create({
  //   data: {
  //     duration: 200,
  //     name: 'Node JS',
  //     description: 'Um curso de node com prisma! e diversas outras libs',
  //   }
  // })

  // console.log(result)
}

main()