-- CreateEnum
CREATE TYPE "public"."ComplaintState" AS ENUM ('OPEN', 'UNDER_REVIEW', 'CLOSED', 'DELETED');

-- AlterTable
ALTER TABLE "public"."complaints" ADD COLUMN     "state" "public"."ComplaintState" NOT NULL DEFAULT 'OPEN';

-- CreateTable
CREATE TABLE "public"."comments" (
    "id" SERIAL NOT NULL,
    "complaint_id" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."comments" ADD CONSTRAINT "comments_complaint_id_fkey" FOREIGN KEY ("complaint_id") REFERENCES "public"."complaints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
