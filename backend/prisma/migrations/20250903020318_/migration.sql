/*
  Warnings:

  - You are about to drop the `Entity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."complaints" DROP CONSTRAINT "complaints_entity_id_fkey";

-- DropTable
DROP TABLE "public"."Entity";

-- CreateTable
CREATE TABLE "public"."entities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,

    CONSTRAINT "entities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."complaints" ADD CONSTRAINT "complaints_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "public"."entities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
