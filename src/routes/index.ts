import { Router } from "express";
import cors from "cors";
import todoRoutes from "../modules/todo/todo.routes";

const configCors = {
  origin: ["http://localhost:3000"],
};

const router = Router();

router.use("/todo", cors(configCors), todoRoutes);

export default router;
