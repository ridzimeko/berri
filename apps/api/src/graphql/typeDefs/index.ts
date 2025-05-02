import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const user = fs.readFileSync(path.join(__dirname, "user.graphql"), "utf8");

export const typeDefs = `#graphql
  ${user}
`;
