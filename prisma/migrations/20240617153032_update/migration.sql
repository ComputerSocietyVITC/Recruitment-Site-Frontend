/*
  Warnings:

  - Added the required column `dept` to the `Response` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Response" ADD COLUMN     "dept" TEXT NOT NULL;
