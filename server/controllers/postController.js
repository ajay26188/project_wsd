import * as postRepository from "../repositories/postRepository.js";

const create = async (c) => {
  const communityId = Number(c.req.param("communityId"));
  if (!Number.isInteger(communityId)) {
    return c.json({ error: "Invalid community id" }, 400);
  }

  const post = await c.req.json();

  if (!post.title || !post.content) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const newPost = await postRepository.create(communityId, post);
  return c.json(newPost, 201);
};

const readAll = async (c) => {
  const communityId = Number(c.req.param("communityId"));
  if (!Number.isInteger(communityId)) {
    return c.json({ error: "Invalid community id" }, 400);
  }

  const posts = await postRepository.readAll(communityId);
  return c.json(posts, 200);
};

const readOne = async (c) => {
  const communityId = Number(c.req.param("communityId"));
  if (!Number.isInteger(communityId)) {
    return c.json({ error: "Invalid community id" }, 400);
  }

  const postId = Number(c.req.param("postId"));
  if (!Number.isInteger(postId)) {
    return c.json({ error: "Invalid post id" }, 400);
  }

  const post = await postRepository.readOne(communityId, postId);

  if (!post) {
    return c.json({ error: "Post not found" }, 404);
  }

  return c.json(post, 200);
};

const update = async (c) => {
  const communityId = Number(c.req.param("communityId"));
  if (!Number.isInteger(communityId)) {
    return c.json({ error: "Invalid community id" }, 400);
  }

  const postId = Number(c.req.param("postId"));
  if (!Number.isInteger(postId)) {
    return c.json({ error: "Invalid post id" }, 400);
  }

  const post = await c.req.json();

  if (!post.title || !post.content) {
    return c.json({ error: "Missing required fields" }, 400);
  }

  const updatedPost = await postRepository.update(
    communityId,
    postId,
    post
  );

  if (!updatedPost) {
    return c.json({ error: "Post not found" }, 404);
  }

  return c.json(updatedPost, 200);
};

const deleteOne = async (c) => {
  const communityId = Number(c.req.param("communityId"));
  if (!Number.isInteger(communityId)) {
    return c.json({ error: "Invalid community id" }, 400);
  }

  const postId = Number(c.req.param("postId"));
  if (!Number.isInteger(postId)) {
    return c.json({ error: "Invalid post id" }, 400);
  }

  const deletedPost = await postRepository.deleteOne(communityId, postId);

  if (!deletedPost) {
    return c.json({ error: "Post not found" }, 404);
  }

  return c.json(deletedPost, 200);
};

export { create, deleteOne, readAll, readOne, update };