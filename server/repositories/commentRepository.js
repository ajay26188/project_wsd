import postgres from "postgres";

const sql = postgres();

const create = async (communityId, postId, comment) => {
  const result = await sql`INSERT INTO posts
    (community_id, parent_post_id, content)
    VALUES (${communityId}, ${postId}, ${comment.content})
    RETURNING *;`;

  return result[0];
};

const readAll = async (postId) => {
  return await sql`SELECT * FROM posts
    WHERE parent_post_id = ${postId}
    ORDER BY created_at DESC;`;
};

const deleteOne = async (communityId, postId, commentId) => {
  const result = await sql`DELETE FROM posts
    WHERE community_id = ${communityId} AND id = ${commentId} AND parent_post_id = ${postId}
    RETURNING *;
  `;

  return result[0];
};

export { create, deleteOne, readAll };