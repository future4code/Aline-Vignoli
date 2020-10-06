function createTask(){
    const inputTask = document.getElementById("tarefa")
    const selectedDay = document.getElementById("dias-semana")

    if ( inputTask.value !== "" ){
        const task = document.getElementById(selectedDay.value)
        task.innerHTML += `<li onclick="checkAsDone(this)">${inputTask.value}</li>`
        inputTask.value = ""
    }else {
        alert("Informe uma tarefa para adicionar!")
    } 
}

function checkAsDone(element){
    element.style.textDecoration= "line-through"
}

function clearAll(){
    const allTasks = document.getElementsByTagName("ul")
    
    for (let i = 0; i< allTasks.length; i++){
        allTasks[i].innerHTML = ""
    }
}