import * as schema from "@/lib/db/schema";
import { drizzle } from "drizzle-orm/expo-sqlite";
import * as expoSQLite from "expo-sqlite";

export const expo = expoSQLite.openDatabaseSync("menura.db", {
  enableChangeListener: true,
});
export const db = drizzle(expo, { schema });
