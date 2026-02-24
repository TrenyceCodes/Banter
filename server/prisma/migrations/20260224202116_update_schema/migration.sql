/*
  Warnings:

  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_chatRoomCreatorId_fkey";

-- DropTable
DROP TABLE "Room";

-- DropTable
DROP TABLE "User";
