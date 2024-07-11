-- CreateEnum
CREATE TYPE "Tags" AS ENUM ('React', 'Ai', 'Tech', 'Coding');

-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "Tags" "Tags";
