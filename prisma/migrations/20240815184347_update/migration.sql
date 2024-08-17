/*
  Warnings:

  - The primary key for the `AnswerMapping` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `AnswerMapping` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Question` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `limit` on the `Question` table. All the data in the column will be lost.
  - The `id` column on the `Question` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Response` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Response` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `questionId` on the `AnswerMapping` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `responseId` on the `AnswerMapping` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `AnswerMapping` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `department` on the `Question` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `Question` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `required` on table `Question` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Departments" AS ENUM ('TECHNICAL', 'DESIGN', 'MANAGEMENT', 'SMC');

-- CreateEnum
CREATE TYPE "QuestionTypes" AS ENUM ('TEXT', 'TEXTAREA', 'RADIO');

-- AlterTable
ALTER TABLE "AnswerMapping" DROP CONSTRAINT "AnswerMapping_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "questionId",
ADD COLUMN     "questionId" UUID NOT NULL,
DROP COLUMN "responseId",
ADD COLUMN     "responseId" UUID NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" UUID NOT NULL,
ADD CONSTRAINT "AnswerMapping_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Question" DROP CONSTRAINT "Question_pkey",
DROP COLUMN "limit",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
DROP COLUMN "department",
ADD COLUMN     "department" "Departments" NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "QuestionTypes" NOT NULL,
ALTER COLUMN "options" SET DATA TYPE TEXT,
ALTER COLUMN "required" SET NOT NULL,
ALTER COLUMN "required" SET DEFAULT false,
ADD CONSTRAINT "Question_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Response" DROP CONSTRAINT "Response_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "Response_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "AnswerMapping" ADD CONSTRAINT "AnswerMapping_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "AnswerMapping" ADD CONSTRAINT "AnswerMapping_responseId_fkey" FOREIGN KEY ("responseId") REFERENCES "Response"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "AnswerMapping" ADD CONSTRAINT "AnswerMapping_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
