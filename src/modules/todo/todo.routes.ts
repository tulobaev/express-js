import { Router } from "express";
import todoControllers from "./todo.controllers";

const router = Router();

router.get("/get-all", todoControllers.getAllTodo);
router.post("/create", todoControllers.addTodo);
router.delete("/delete/:id", todoControllers.deleteTodo);

export default router;
