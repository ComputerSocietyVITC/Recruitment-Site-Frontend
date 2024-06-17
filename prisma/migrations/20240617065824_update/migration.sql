-- AlterTable
ALTER TABLE "User" ALTER COLUMN "firstPreference" DROP NOT NULL,
ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "registrationNumber" DROP NOT NULL,
ALTER COLUMN "secondPreference" DROP NOT NULL;
