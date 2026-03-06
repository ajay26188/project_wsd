import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";
import * as communityController from "./controllers/communityController.js";
import * as postController from "./controllers/postController.js";
import * as commentController from "./controllers/commentController.js";

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

//retrieving posts for a community
app.get("/api/communities/:communityId/posts", postController.readAll);

app.get("/api/communities/:communityId/posts/:postId", postController.readOne);

app.post("/api/communities/:communityId/posts", postController.create);

app.put("/api/communities/:communityId/posts/:postId", postController.update);

app.delete("/api/communities/:communityId/posts/:postId", postController.deleteOne);

//retrieving comments for a post
app.get("/api/communities/:communityId/posts/:postId/comments", commentController.readAll);

app.post("/api/communities/:communityId/posts/:postId/comments", commentController.create);

app.delete("/api/communities/:communityId/posts/:postId/comments/:commentId", commentController.deleteOne);

export default app;
