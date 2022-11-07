-- CreateTable
CREATE TABLE "estudantes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,

    CONSTRAINT "estudantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aulas" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "aulas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estudantes_aulas" (
    "id" TEXT NOT NULL,
    "fk_id_estudante" TEXT NOT NULL,
    "fk_id_aula" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "estudantes_aulas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "estudantes_aulas" ADD CONSTRAINT "estudantes_aulas_fk_id_estudante_fkey" FOREIGN KEY ("fk_id_estudante") REFERENCES "estudantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estudantes_aulas" ADD CONSTRAINT "estudantes_aulas_fk_id_aula_fkey" FOREIGN KEY ("fk_id_aula") REFERENCES "aulas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
