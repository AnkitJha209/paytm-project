/*
  Warnings:

  - You are about to drop the column `PhoneNo` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "PhoneNo",
ADD COLUMN     "phoneNo" INTEGER;
