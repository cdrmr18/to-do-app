
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
    let newTaskItem = `
        <div class="individual-task-container mt-1">
            <div class="todo-item-container">
                <div class="todo-item" contenteditable="true">
                    ${task[0].toUpperCase() + task.slice(1)}
                </div>

                <div class="task-description" contenteditable="true">
                    ${(details) ? details[0].toUpperCase() + details.slice(1) : ""}
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
   
    toDoList.insertAdjacentHTML('beforeend', newTaskItem);
    document.getElementById('user-input-title').value = "";
    document.getElementById('user-input-details').value = "";
}
// ${task[0].toUpperCase() + task.slice(1)}
//  ${(details) ? details[0].toUpperCase() + details.slice(1) : ""}