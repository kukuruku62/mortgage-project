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

  fastify.get<{ Params: { name: string } }>("/mainpage/:name", async (request, reply) => {

    const name = request.params.name
    const result = await collection?.findOne({ name: new RegExp(`^${name}$`, 'i') });
    if (result?.length === 0) {
      throw new Error("No documents found");
    }
  
    reply.send(result);
  });
};

export default routes;
