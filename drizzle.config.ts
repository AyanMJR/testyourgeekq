import { defineConfig } from "drizzle-kit";
import "./envConfig";

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/db/schema",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
