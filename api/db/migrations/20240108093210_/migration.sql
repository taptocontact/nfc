/*
  Warnings:

  - Added the required column `status` to the `ClientInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clientinfo` ADD COLUMN `status` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Card` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `extra` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
