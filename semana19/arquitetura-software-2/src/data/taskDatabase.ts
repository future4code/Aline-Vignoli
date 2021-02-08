import { connection } from "./connection";
import { task } from "../business/entities/task";
import { toTaskModel } from "./model/taskModel";


export const insertTask = async (
   task: task
): Promise<void> => {
   await connection('to_do_list_tasks')
      .insert({
         id: task.id,
         title: task.title,
         description: task.description,
         deadline: task.deadline,
         author_id: task.authorId
      });
};

export const selectTaskById = async (
   id: string
): Promise<task> => {
   const result = await connection.raw(`
      SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
      JOIN to_do_list_users AS users
      ON author_id = users.id
      WHERE tasks.id = '${id}';
   `);

   return toTaskModel(result[0][0]);
};

export const selectTasksByUserId = async (
   id: string
): Promise<task[]> => {
   const result = await connection.raw(`
      SELECT * FROM to_do_list_tasks
      WHERE author_id = '${id}';
   `);

   const tasks: task[] = [];

   for (let task of result[0]) {
      tasks.push(toTaskModel(task));
   };

   return tasks;
};