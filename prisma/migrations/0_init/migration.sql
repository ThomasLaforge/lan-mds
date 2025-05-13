-- CreateTable
CREATE TABLE "Promo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "Promo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RLRank" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "RLRank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "pseudo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "promoId" INTEGER NOT NULL,
    "levelId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "acronym" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Match" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "team1Id" INTEGER NOT NULL,
    "team2Id" INTEGER NOT NULL,
    "score1" INTEGER NOT NULL,
    "score2" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "pseudo" TEXT NOT NULL,
    "motdpasse" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Promo_name_key" ON "Promo"("name");

-- CreateIndex
CREATE UNIQUE INDEX "RLRank_name_key" ON "RLRank"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Player_pseudo_key" ON "Player"("pseudo");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Team_acronym_key" ON "Team"("acronym");

-- CreateIndex
CREATE UNIQUE INDEX "User_pseudo_key" ON "User"("pseudo");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_promoId_fkey" FOREIGN KEY ("promoId") REFERENCES "Promo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "RLRank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_team1Id_fkey" FOREIGN KEY ("team1Id") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_team2Id_fkey" FOREIGN KEY ("team2Id") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

