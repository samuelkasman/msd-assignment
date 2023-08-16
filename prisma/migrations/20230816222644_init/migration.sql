-- CreateTable
CREATE TABLE "Chart" (
    "id" TEXT NOT NULL,
    "isLiked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Chart_pkey" PRIMARY KEY ("id")
);
