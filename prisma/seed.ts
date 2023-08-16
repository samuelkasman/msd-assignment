/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const firstChartId = 'line-chart';
  await prisma.chart.upsert({
    where: {
      id: firstChartId,
    },
    create: {
      id: firstChartId,
      isLiked: false,
    },
    update: {},
  });

  const secondChartId = 'pie-chart';
  await prisma.chart.upsert({
    where: {
      id: secondChartId,
    },
    create: {
      id: secondChartId,
      isLiked: false,
    },
    update: {},
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
