import { Database } from "https://deno.land/x/denodb/mod.ts";

const db = new Database("postgres", {
  database: "adm",
  host: "localhost",
  username: "adm",
  password: "adm",
  port: 5432,
});

export default db;
