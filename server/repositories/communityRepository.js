import postgres from "postgres";

const sql = postgres();

const create = async (community) => {
  const result = await sql`INSERT INTO communities
    (name, description)
    VALUES (${community.name}, ${community.description})
    RETURNING *;`;

  return result[0];
};

const readAll = async () => {
  return await sql`SELECT * FROM communities`;
};

const readOne = async (id) => {
  const result = await sql`SELECT * FROM communities WHERE id = ${id}`;
  return result[0];
};

const update = async (id, community) => {
  const result = await sql`UPDATE communities SET
      name = ${community.name},
      description = ${community.description}
    WHERE id = ${id}
    RETURNING *;`;
  return result[0];
};

const deleteOne = async (id) => {
  const result = await sql`DELETE FROM communities
    WHERE id = ${id} RETURNING *`;
  return result[0];
};

export { create, deleteOne, readAll, readOne, update };