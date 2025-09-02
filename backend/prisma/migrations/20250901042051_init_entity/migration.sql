-- CreateTable
CREATE TABLE "public"."Entity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);
