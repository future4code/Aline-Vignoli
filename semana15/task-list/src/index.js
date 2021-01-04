//Para adicionar uma tarefa rodar o comando:
// npm run start "Nome da sua tarefa"

const taskList = []

const addTask = () => {
    newTask = process.argv[2]
    taskList.push(newTask)
}

addTask()
console.log(taskList)