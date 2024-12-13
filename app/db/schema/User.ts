import { pgTable } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: t
    .text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: t.text("name"),
  email: t.text("email").unique(),
  emailVerified: t.timestamp("emailVerified", { mode: "date" }),
  image: t.text("image"),
});
