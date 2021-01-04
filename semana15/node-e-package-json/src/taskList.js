const taskList = []

const addTask = () => {
    newTask = process.argv[2]
    taskList.push(newTask)
}

addTask()
console.log(taskList)