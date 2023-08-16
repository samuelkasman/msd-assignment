import { router, publicProcedure } from '../trpc';
import { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '@/server/prisma';

/**
 * Default selector for Chart.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultChartSelect = Prisma.validator<Prisma.ChartSelect>()({
  id: true,
  isLiked: true,
});

export const chartRouter = router({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.string().nullish(),
      }),
    )
    .query(async ({ input }) => {
      /**
       * For pagination docs you can have a look here
       * @see https://trpc.io/docs/useInfiniteQuery
       * @see https://www.prisma.io/docs/concepts/components/prisma-client/pagination
       */
      const limit = input.limit ?? 50;
      const { cursor } = input;

      const items = await prisma.chart.findMany({
        select: defaultChartSelect,
        // get an extra item at the end which we'll use as next cursor
        take: limit + 1,
        where: {},
        cursor: cursor
          ? {
              id: cursor,
            }
          : undefined,
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        // Remove the last item and use it as next cursor
        const nextItem = items.pop()!;
        nextCursor = nextItem.id;
      }

      return {
        items: items.reverse(),
        nextCursor,
      };
    }),
  update: publicProcedure
  .input(
    z.object({
      id: z.string(),
      isLiked: z.boolean(),
    }),
  )
  .mutation(async ({ input }) => {
    const { id, isLiked } = input;
    const updatedChart = await prisma.chart.update({
      where: { id },
      data: { isLiked },
      select: defaultChartSelect,
    });
    if (!updatedChart) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `No chart with id '${id}'`,
      });
    }
    return updatedChart;
  }),
});
