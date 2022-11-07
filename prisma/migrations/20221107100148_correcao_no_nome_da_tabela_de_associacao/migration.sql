/*
  Warnings:

  - You are about to drop the `estudantes_aulas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "estudantes_aulas" DROP CONSTRAINT "estudantes_aulas_fk_id_aula_fkey";

-- DropForeignKey
ALTER TABLE "estudantes_aulas" DROP CONSTRAINT "estudantes_aulas_fk_id_estudante_fkey";

-- DropTable
DROP TABLE "estudantes_aulas";

-- CreateTable
CREATE TABLE "matriculas" (
    "id" TEXT NOT NULL,
    "fk_id_estudante" TEXT NOT NULL,
    "fk_id_aula" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "matriculas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "matriculas" ADD CONSTRAINT "matriculas_fk_id_estudante_fkey" FOREIGN KEY ("fk_id_estudante") REFERENCES "estudantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matriculas" ADD CONSTRAINT "matriculas_fk_id_aula_fkey" FOREIGN KEY ("fk_id_aula") REFERENCES "aulas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
