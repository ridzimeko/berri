import { prisma } from "@/lib/prisma";
import { GraphQLContext } from "../context";

export const userResolvers = {
  Query: {
    userInfo: async (_: any, __: any, context: GraphQLContext) => {
      // const userId = context.userId;

      // if (!userId) return null;

      // return prisma.user.findUnique({
      //   where: { id: userId },
      // });

      console.log('showing user')

      return {
        username: "budi",
        email: "budi@gmail.com",
        password: "123",
      };
    },
    users: async () => {
      return prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: async (_: any, args: any) => {
      const { username, email, password } = args;

      console.log("creating user");

      return prisma.user.create({
        data: {
          username,
          email,
          password,
        },
      });
    },
  },
};
