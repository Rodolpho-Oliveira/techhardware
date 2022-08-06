-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_computer" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "users_computer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "computers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "motherboard" INTEGER NOT NULL,
    "cpu" INTEGER NOT NULL,
    "gpu" INTEGER,
    "drive" INTEGER,
    "font" INTEGER,
    "ram" INTEGER,

    CONSTRAINT "computers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hardwares" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "spec_id" INTEGER NOT NULL,
    "points" INTEGER,

    CONSTRAINT "hardwares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specs" (
    "id" SERIAL NOT NULL,
    "tdp" INTEGER NOT NULL,
    "socket" TEXT,
    "capacity" INTEGER,
    "ddr" INTEGER,
    "core" INTEGER,
    "thread" INTEGER,
    "frequency" INTEGER,

    CONSTRAINT "specs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "users_computer" ADD CONSTRAINT "users_computer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hardwares" ADD CONSTRAINT "hardwares_spec_id_fkey" FOREIGN KEY ("spec_id") REFERENCES "specs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
