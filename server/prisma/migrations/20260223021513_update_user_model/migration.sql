/*
  Warnings:

  - You are about to drop the column `OTP_Code` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `OTP_Expiry` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_OTP_Code_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "OTP_Code",
DROP COLUMN "OTP_Expiry";
