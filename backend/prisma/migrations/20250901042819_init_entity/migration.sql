-- CreateTable
CREATE TABLE "public"."complaints" (
    "id" SERIAL NOT NULL,
    "entity_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "complaints_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."complaints" ADD CONSTRAINT "complaints_entity_id_fkey" FOREIGN KEY ("entity_id") REFERENCES "public"."Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
