"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const rootRoute_1 = __importDefault(require("./routes/rootRoute"));
const connector_1 = __importDefault(require("./db/connector"));
const cors_1 = __importDefault(require("@fastify/cors"));
const fastify = (0, fastify_1.default)();
fastify.register(cors_1.default);
fastify.register(connector_1.default);
fastify.register(rootRoute_1.default);
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log("Server started");
    }
    catch (err) {
        console.error('Error starting server:', err);
        process.exit(1);
    }
};
start();
