
function addTask() {
    
    let container = document.querySelector('.taskList')
    let input = document.querySelector('#newTask')
    let getTask = input.value.trim()
  
    if(!getTask){
        alert('Insira uma tarefa para prosseguir!')
        return
    }
    let taskItens = document.createElement('div')
    taskItens.className = "taskItem"
    let task = document.createElement('li')
    task.textContent = getTask
    task.className = "task"
    container.appendChild(taskItens)
    taskItens.appendChild(task)

    let actions = document.createElement('div')
    actions.className = 'actions'


    let completeBtn = document.createElement('button')
    completeBtn.className = `completeBtn btn`
    completeBtn.onclick = () => toggleTaskComplete(task, completeBtn)
    completeBtn.textContent = "COMPLETAR"
    
    
    
    
    let removeBtn = document.createElement('button')
    removeBtn.className = `removeBtn btn`
    removeBtn.onclick = () => deleteTask(taskItens)
    removeBtn.textContent = "REMOVER"
    
    taskItens.appendChild(actions)
    actions.appendChild(completeBtn)
    actions.appendChild(removeBtn)
    
    input.value = ""
   

}

function toggleTaskComplete(task, btn){
    task.classList.toggle('completed')
    btn.textContent = "DESMARCAR"

}

function deleteTask(taskItem){

    taskItem.remove()
}


