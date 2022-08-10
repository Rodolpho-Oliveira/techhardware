/*
  Warnings:

  - Added the required column `computer_id` to the `users_computer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "computers" ALTER COLUMN "cpu" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users_computer" ADD COLUMN     "computer_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "users_computer" ADD CONSTRAINT "users_computer_computer_id_fkey" FOREIGN KEY ("computer_id") REFERENCES "computers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
