/*
  Warnings:

  - A unique constraint covering the columns `[client]` on the table `ClientInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `ClientInfo_client_key` ON `ClientInfo`(`client`);
