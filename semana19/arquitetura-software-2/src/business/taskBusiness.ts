import { createTaskInputDT0 } from "../data/model/taskModel";
import { insertTask, selectTaskById } from "../data/taskDatabase"
import { task } from "./entities/task"
import { generateId } from "./services/idGenerator"

export const businessCreateTask = async (
   input: createTaskInputDT0
) => {

   if (
      !input.title ||
      !input.description ||
      !input.deadline ||
      !input.authorId
   ) {
      throw new Error('"title", "description", "deadline" and "authorId" are requireds');
   };

   const id: string = generateId();
   const task: task = {
      id,
      title: input.title,
      description: input.description,
      deadline: input.deadline,
      authorId: input.authorId
   }

   await insertTask(task);
};

export const businessGetTaskById = async(
   id:string
) : Promise<task>=> {

   const result = await selectTaskById(id);

   if (!result) {
      throw new Error("Task not found");
   };

   const task: task = {
      id: result.id,
      title: result.title,
      description: result.description,
      deadline: result.deadline,
      authorId: result.authorId
   };

   return task;
};