-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "history";

-- CreateTable
CREATE TABLE "history"."complaint_history" (
    "id" SERIAL NOT NULL,
    "complaint_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "prev_state" "public"."ComplaintState" NOT NULL,
    "new_state" "public"."ComplaintState" NOT NULL,
    "change_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "complaint_history_pkey" PRIMARY KEY ("id")
);
