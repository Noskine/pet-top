/*
  Warnings:

  - Added the required column `SaleId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "SaleId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_SaleId_fkey" FOREIGN KEY ("SaleId") REFERENCES "Sale"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
