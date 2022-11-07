/*
  Warnings:

  - A unique constraint covering the columns `[fk_id_author]` on the table `books` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_id_author` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ADD COLUMN     "fk_id_author" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "books_fk_id_author_key" ON "books"("fk_id_author");

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_fk_id_author_fkey" FOREIGN KEY ("fk_id_author") REFERENCES "authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
