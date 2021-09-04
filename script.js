
const draggableInProgress = document.querySelector(".to-do-list-items");
const draggableCompleted = document.getElementById("complete-tasks");

new Sortable(draggableInProgress, {
    group: 'shared', // set both lists to same group
    animation: 150,
    ghostClass: 'blue-background-class'
});

new Sortable(draggableCompleted, {
    group: 'shared',
    animation: 150,
    ghostClass: 'blue-background-class'
});

const searchTodoList = (e) => {
    const searchInput = document.getElementById('search-input');
    const filter = searchInput.value.toUpperCase();
    const todoItem = document.querySelectorAll('.todo-item');
    

    for (const item of todoItem) {
        let txtValue = item.textContent || item.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            item.parentNode.parentNode.style.display = '';
        } else {
            item.parentNode.parentNode.style.display = 'none';
        }
    }
}

const deleteTask = (e) => {
    let todoTask = e.target.parentElement.parentElement;
    todoTask.remove();
}

const createTask = (e) => {
    e.preventDefault();
    let task = document.getElementById('user-input-title').value;
    let details = document.getElementById('user-input-details').value;
    
    let toDoList = document.querySelector('.to-do-list-items');
    if (task != "") {
        let newTaskItem = `
        <div class="individual-task-container mt-2">
            <div class="todo-item-container">
                <div class="todo-item" contenteditable="true">
                 <p class="mt-0"><i class="fas fa-walking"></i> <span>${task[0].toUpperCase() + task.slice(1)}</span></p>
                </div>

                <div class="task-description" contenteditable="true">
                <p class="mb-0"><i class="far fa-edit"></i> <span>${(details) ? details[0].toUpperCase() + details.slice(1) : ""}</span></p>
   
                </div>
            </div>
            <div onclick="deleteTask(event)">
                <button class="btn delete-button-bg">🗑️</button>
            </div>
            <div class="drag-icon">
                <i class="fas fa-bars"></i>
            </div>
        </div>        
        `;
    
        toDoList.insertAdjacentHTML('beforebegin', newTaskItem);
    } else {
        document.getElementById('user-input-title').style.border = "2px solid #00c8ffcc";
        document.getElementById('user-input-title').placeholder = "Please enter a task";
    }
    document.getElementById('user-input-title').value = "";
    document.getElementById('user-input-details').value = "";
    
}