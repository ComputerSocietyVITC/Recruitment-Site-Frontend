/*
  Warnings:

  - You are about to drop the column `responseId` on the `AnswerMapping` table. All the data in the column will be lost.
  - You are about to drop the `Response` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AnswerMapping" DROP CONSTRAINT "AnswerMapping_responseId_fkey";

-- AlterTable
ALTER TABLE "AnswerMapping" DROP COLUMN "responseId",
ADD COLUMN     "response" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "Response";
