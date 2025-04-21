import { BaseContext } from '@apollo/server';
import { IncomingMessage } from 'http';
import jwt from 'jsonwebtoken';

export interface GraphQLContext extends BaseContext {
  userId?: string;
}

export async function context({ req }: { req: IncomingMessage }): Promise<GraphQLContext> {
  const auth = req.headers.authorization;
  const token = auth.startsWith('Bearer ') ? auth?.replace('Bearer ', '') : null;

  if (!token) return {};

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    return { userId: (payload as any).userId };
  } catch {
    return {};
  }
}