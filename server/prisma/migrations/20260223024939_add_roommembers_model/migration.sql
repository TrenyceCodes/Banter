-- CreateTable
CREATE TABLE "RoomMembers" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "RoomMembers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RoomToRoomMembers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RoomToRoomMembers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_RoomMembersToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_RoomMembersToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_RoomToRoomMembers_B_index" ON "_RoomToRoomMembers"("B");

-- CreateIndex
CREATE INDEX "_RoomMembersToUser_B_index" ON "_RoomMembersToUser"("B");

-- AddForeignKey
ALTER TABLE "_RoomToRoomMembers" ADD CONSTRAINT "_RoomToRoomMembers_A_fkey" FOREIGN KEY ("A") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoomToRoomMembers" ADD CONSTRAINT "_RoomToRoomMembers_B_fkey" FOREIGN KEY ("B") REFERENCES "RoomMembers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoomMembersToUser" ADD CONSTRAINT "_RoomMembersToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "RoomMembers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoomMembersToUser" ADD CONSTRAINT "_RoomMembersToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
