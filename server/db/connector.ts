import fastifyPlugin from "fastify-plugin";
import fastifyMongo from "@fastify/mongodb";
import { FastifyInstance } from "fastify";
import * as dotenv from "dotenv";
dotenv.config();

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */

async function dbConnector (fastify: FastifyInstance, options: Object) {
  try {
    await fastify.register(fastifyMongo, {
      url: `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASSWORD}@cluster0.qzpfrzu.mongodb.net/`,
    });
    console.log("db connected")
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};


export default fastifyPlugin(dbConnector)