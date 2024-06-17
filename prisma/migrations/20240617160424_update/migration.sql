/*
  Warnings:

  - Added the required column `limit` to the `Response` table without a default value. This is not possible if the table is not empty.
  - Added the required column `required` to the `Response` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Response" ADD COLUMN     "limit" INTEGER NOT NULL,
ADD COLUMN     "options" TEXT[],
ADD COLUMN     "required" BOOLEAN NOT NULL;
