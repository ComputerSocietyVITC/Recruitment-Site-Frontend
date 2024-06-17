/*
  Warnings:

  - The `options` column on the `Response` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Response" ALTER COLUMN "limit" DROP NOT NULL,
DROP COLUMN "options",
ADD COLUMN     "options" JSONB;
