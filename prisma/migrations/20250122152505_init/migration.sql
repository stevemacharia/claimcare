/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `role` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `name`,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `role` ENUM('ADMIN', 'STAFF', 'CLIENT') NOT NULL;
