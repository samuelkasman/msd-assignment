import { publicProcedure, router } from '../trpc';
import { chartRouter } from './chart';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
  chart: chartRouter,
});

export type AppRouter = typeof appRouter;
