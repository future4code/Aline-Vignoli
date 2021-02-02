import { Request, Response } from "express";
import { task } from "../business/entities/task";
import { businessCreateTask, businessGetTaskById } from "../business/taskBusiness";
import { createTaskInputDT0 } from "../data/model/taskModel";

export const getTaskById = async (
   req: Request,
   res: Response
) => {
   try {
      const { id } = req.params;
      const task: task = await businessGetTaskById(id);

      res.status(200).send(task);

   } catch (error) {
      res.status(400).send(error.message);
   };
};

export const createTask = async (
   req: Request,
   res: Response
) => {
   try {
      const input: createTaskInputDT0 = {
         title: req.body.title,
         description: req.body.description,
         deadline: req.body.deadline,
         authorId: req.body.authorId
      };

      await businessCreateTask(input);

      res.status(201).end();

   } catch (error) {
      res.statusMessage = error.message
      res.status(500).end();
   };
};