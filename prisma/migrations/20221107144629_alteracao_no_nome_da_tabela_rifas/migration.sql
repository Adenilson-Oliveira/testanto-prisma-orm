/*
  Warnings:

  - You are about to drop the `Number` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Number";

-- CreateTable
CREATE TABLE "rifas" (
    "id" TEXT NOT NULL,
    "num" INTEGER NOT NULL,
    "vendido" BOOLEAN NOT NULL,

    CONSTRAINT "rifas_pkey" PRIMARY KEY ("id")
);
