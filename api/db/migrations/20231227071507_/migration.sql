/*
  Warnings:

  - Added the required column `client` to the `ClientInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clientinfo` ADD COLUMN `client` VARCHAR(191) NOT NULL;
