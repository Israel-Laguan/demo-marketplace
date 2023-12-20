-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'client',
    "email" TEXT NOT NULL,
    "password" VARCHAR(511) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bag" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isBuyCompleted" BOOLEAN NOT NULL DEFAULT false,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(127) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "images" TEXT[],
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "isHidden" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Bag_products" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_Bag_products_AB_unique" ON "_Bag_products"("A", "B");

-- CreateIndex
CREATE INDEX "_Bag_products_B_index" ON "_Bag_products"("B");

-- AddForeignKey
ALTER TABLE "Bag" ADD CONSTRAINT "Bag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Bag_products" ADD CONSTRAINT "_Bag_products_A_fkey" FOREIGN KEY ("A") REFERENCES "Bag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Bag_products" ADD CONSTRAINT "_Bag_products_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
