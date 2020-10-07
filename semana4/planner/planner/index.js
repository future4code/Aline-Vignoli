function createTask(){
    const inputTask = document.getElementById("tarefa")
    const selectedDay = document.getElementById("dias-semana")
    const selectedHour = document.getElementById("horas-dia")

    if ( inputTask.value !== "" ){
        const task = document.getElementById(selectedDay.value)
        task.innerHTML += `<li onclick="checkAsDone(this)">${selectedHour.value} - ${inputTask.value}</li>`
        inputTask.value = ""
    }else {
        alert("Informe uma tarefa para adicionar!")
    } 
}

function checkAsDone(task){
    task.style.textDecoration= "line-through"
    task.style.color = "#006400"
}

function clearAll(){
    const allTasks = document.getElementsByTagName("ul")
    
    for (let i = 0; i< allTasks.length; i++){
        allTasks[i].innerHTML = ""
    }
}