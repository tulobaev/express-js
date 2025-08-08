import { Request, Response } from "express";

const data: any[] = [];

const getAllTodo = async (req: Request, res: Response) => {
  try {
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (e) {
    console.error(`Error in getAllTodo: ${e}`);
    res.status(500).send({
      success: false,
      message: `Error in getAllTodo: ${e}`,
    });
  }
};

const addTodo = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      res.status(400).send({
        success: false,
        message: "Title is required",
      });
      return;
    }
    const newTodo = {
      id: data.length + 1,
      title,
      description: description || "",
      completed: false,
    };
    data.push(newTodo);
    res.status(201).send({
      success: true,
      data: newTodo,
    });
  } catch (e) {
    console.error(`Error in addTodo: ${e}`);
    res.status(500).send({
      success: false,
      message: `Error in addTodo: ${e}`,
    });
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = data.findIndex((item) => item.id === Number(id));

    if (result === -1) {
      res.status(400).send({
        success: false,
        message: "Todo not",
      });
      return;
    }

    data.splice(result, 1);

    res.status(200).send({
      success: true,
      message: "Todo Delete successfuly",
    });
  } catch (error) {
    console.error("error in deleteTodo function", error);
  }
};

export default {
  getAllTodo,
  addTodo,
  deleteTodo,
};
