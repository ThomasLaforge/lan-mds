import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const promos = [
    "B1",
    "B2",
    "B3 Dig",
    "B3 Dev",
    "B3 Market",
    "B3 Créa Num",
    "M1 DFS",
    "M1 UX/UI",
    "M1 Market",
    "M1 DA",
    "M2 DFS",
    "M2 UX/UI",
    "M2 Market",
    "M2 DA"
  ]
  await Promise.all(
    promos.map((promo, i) => {
      return prisma.promo.upsert({
        where: { name: promo },
        update: {},
        create: {
          name: promo,
          order: i
        }
      });
    }),
  );

  const roles = [
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
    "Champion",
    "Grandchampion",
    "Supersoniclegend"
  ];
  await Promise.all(
    roles.map((role, i) => {
      return prisma.rLRank.upsert({
        where: { name: role },
        update: {},
        create: {
          name: role,
          order: i
        }
      });
    }),
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });