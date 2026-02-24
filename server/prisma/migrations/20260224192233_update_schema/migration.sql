/*
  Warnings:

  - You are about to drop the column `chatroomCreatorId` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the `Messages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoomMembers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RoomMembersToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RoomToRoomMembers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Messages" DROP CONSTRAINT "Messages_chatroomId_fkey";

-- DropForeignKey
ALTER TABLE "Messages" DROP CONSTRAINT "Messages_userId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_chatroomCreatorId_fkey";

-- DropForeignKey
ALTER TABLE "_RoomMembersToUser" DROP CONSTRAINT "_RoomMembersToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoomMembersToUser" DROP CONSTRAINT "_RoomMembersToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToRoomMembers" DROP CONSTRAINT "_RoomToRoomMembers_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoomToRoomMembers" DROP CONSTRAINT "_RoomToRoomMembers_B_fkey";

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "chatroomCreatorId";

-- DropTable
DROP TABLE "Messages";

-- DropTable
DROP TABLE "RoomMembers";

-- DropTable
DROP TABLE "_RoomMembersToUser";

-- DropTable
DROP TABLE "_RoomToRoomMembers";
