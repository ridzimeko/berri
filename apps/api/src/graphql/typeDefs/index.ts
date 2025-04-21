import fs from 'fs';
import path from 'path';

const user = fs.readFileSync(path.join(__dirname, 'user.graphql'), 'utf8');

export const typeDefs = `#graphql
  ${user}
`;