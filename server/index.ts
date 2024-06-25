import Fastify, { FastifyInstance } from "fastify";
import routes from "./routes/rootRoute";
import dbConnector from "./db/connector";
import cors from "@fastify/cors"

const fastify: FastifyInstance = Fastify();

fastify.register(cors)
fastify.register(dbConnector);
fastify.register(routes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("Server started");
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
};

start();
