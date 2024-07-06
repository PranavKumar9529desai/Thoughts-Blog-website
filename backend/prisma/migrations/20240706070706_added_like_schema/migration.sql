-- CreateTable
CREATE TABLE "Likes" (
    "blogsId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("userId","blogsId")
);

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Likes" ADD CONSTRAINT "Likes_blogsId_fkey" FOREIGN KEY ("blogsId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
