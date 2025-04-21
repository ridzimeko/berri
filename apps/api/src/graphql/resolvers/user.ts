import { prisma } from '@/lib/prisma';
import { GraphQLContext } from '../context';

export const userResolvers = {
  Query: {
    me: async (_: any, __: any, context: GraphQLContext) => {
      const userId = context.userId;

      if (!userId) return null;

      return prisma.user.findUnique({
        where: { id: userId },
      });
    },
  },
};