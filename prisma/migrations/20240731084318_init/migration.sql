-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "Price" INTEGER NOT NULL,
    "filePath" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "decription" TEXT NOT NULL,
    "isAvaiableforPurchase" TEXT NOT NULL,
    "CreateAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "CreateAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Oder" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "CreateAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdateAt" DATETIME NOT NULL,
    "userID" TEXT NOT NULL,
    "ProductID" TEXT NOT NULL,
    CONSTRAINT "Oder_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Oder_ProductID_fkey" FOREIGN KEY ("ProductID") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DownloadVerifiCation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "expriesAt" DATETIME NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productID" TEXT NOT NULL,
    CONSTRAINT "DownloadVerifiCation_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
