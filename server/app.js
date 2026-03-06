import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";
import * as communityController from "./controllers/communityController.js";

// importing database client
import postgres from "postgres";

const app = new Hono();
// creating an instance of the database client
const sql = postgres();

app.use("/*", cors());
app.use("/*", logger());

let visits = 0;
app.get("/api/visits", (c) => {
  visits++;
  return c.json({ visits });
});

// retrieving communities from database on requests to /api/communities
app.get("/api/communities", communityController.readAll);

app.get("/api/communities/:communityId", communityController.readOne);

app.post("/api/communities", communityController.create);

app.put("/api/communities/:communityId", communityController.update);

app.delete("/api/communities/:communityId", communityController.deleteOne);

export default app;
