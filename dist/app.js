"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildServer = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const buildServer = () => {
    const server = (0, express_1.default)();
    // Middleware
    server.use(express_1.default.json());
    server.get("/", (req, res) => {
        res.status(200).send({
            message: "Hello World!",
        });
    });
    server.use("/api/v1", routes_1.default);
    return server;
};
exports.buildServer = buildServer;
