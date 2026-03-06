import postgres from "postgres";

const sql = postgres();

const create = async (communityId, post) => {
  const result = await sql`INSERT INTO posts
    (community_id, title, content)
    VALUES (${communityId}, ${post.title}, ${post.content})
    RETURNING *;`;

  return result[0];
};

const readAll = async (communityId) => {
  return await sql`SELECT * FROM posts
    WHERE community_id = ${communityId}
    ORDER BY created_at DESC;`;
};

const readOne = async (communityId, postId) => {
  const result = await sql`SELECT * FROM posts
    WHERE community_id = ${communityId} AND id = ${postId};`;
  return result[0];
};

const update = async (communityId, postId, post) => {
  const result = await sql`UPDATE posts SET
      title = ${post.title},
      content = ${post.content}
    WHERE community_id = ${communityId} AND id = ${postId}
    RETURNING *;`;

  return result[0];
};

const deleteOne = async (communityId, postId) => {
  const result = await sql`DELETE FROM posts
    WHERE community_id = ${communityId} AND id = ${postId}
    RETURNING *;
  `;

  return result[0];
};

export { create, deleteOne, readAll, readOne, update };