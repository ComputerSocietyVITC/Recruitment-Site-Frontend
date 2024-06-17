/*
  Warnings:

  - A unique constraint covering the columns `[registrationNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstPreference` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registrationNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondPreference` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "firstPreference" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "registrationNumber" TEXT NOT NULL,
ADD COLUMN     "secondPreference" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_registrationNumber_key" ON "User"("registrationNumber");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");
