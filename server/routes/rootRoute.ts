import { FastifyPluginAsync } from "fastify";

const routes: FastifyPluginAsync = async (fastify, options) => {
  const db = fastify.mongo.client.db("mortgage");
  const collection = db.collection("mentors");

  if (!collection) {
    throw new Error("Collection does not exist");
  }

  fastify.get("/", async (request, reply) => {
    return { hello: "world" };
  });

  fastify.get("/mainpage", async (request, reply) => {
    const result = await collection?.find().toArray();

    if (result?.length === 0) {
      throw new Error("No documents found");
    }
    reply.send(result);
  });
};

export default routes;
