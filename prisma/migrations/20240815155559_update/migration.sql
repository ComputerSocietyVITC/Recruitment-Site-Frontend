/*
  Warnings:

  - You are about to drop the column `dept` on the `Response` table. All the data in the column will be lost.
  - You are about to drop the column `limit` on the `Response` table. All the data in the column will be lost.
  - You are about to drop the column `options` on the `Response` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `Response` table. All the data in the column will be lost.
  - You are about to drop the column `required` on the `Response` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Response` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Response` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Response" DROP CONSTRAINT "Response_userId_fkey";

-- AlterTable
ALTER TABLE "Response" DROP COLUMN "dept",
DROP COLUMN "limit",
DROP COLUMN "options",
DROP COLUMN "question",
DROP COLUMN "required",
DROP COLUMN "type",
DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "options" JSONB,
    "limit" INTEGER,
    "required" BOOLEAN,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerMapping" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "responseId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "AnswerMapping_pkey" PRIMARY KEY ("id")
);
