// CREATING DRAGGABLE DIVS
const draggableInProgress = document.querySelector(".to-do-list-items");
const draggableCompleted = document.getElementById("complete-tasks");

    // in progress tasks
new Sortable(draggableInProgress, {
    group: 'shared', // set both lists to same group
    animation: 150
});

    // completed tasks
new Sortable(draggableCompleted, {
    group: 'shared',
    animation: 150
});
// END


// HELPER FUNCTIONS
    // searches through to do items for a match to search input value
const searchTodoList = (e) => {
    let searchInput = document.getElementById('search-input');
    let filter = searchInput.value.toUpperCase();
    let todoItem = document.querySelectorAll('.todo-item');

    // looping through to do items for a match to filter value
    for (const item of todoItem) {
        let titleValue = item.textContent || item.innerText;

        if (titleValue.toUpperCase().indexOf(filter) > -1 ) {
            item.parentNode.parentNode.style.display = '';
            console.log(1)
        } else {
            item.parentNode.parentNode.style.display = 'none';
        }
    } 
}


const deleteTask = (e) => {
    let todoTask = e.target.parentElement.parentElement;
    todoTask.remove();
}

// FUNCTION TO CREATE NEW DIV WITH NEW TASK ITEM
const createTask = (e) => {
    e.preventDefault();
    let toDoList = document.querySelector('.to-do-list-items');
    let task = document.getElementById('user-input-title').value;
    let details = document.getElementById('user-input-details').value;
    
    // creates new task div if title is not empty
    if (task != "") {
        let newTaskItem = `
        <div class="individual-task-container mt-2">
            <div class="todo-item-container">
                <div class="todo-item" contenteditable="true">
                 <p class="mt-0"><i class="fas fa-walking"></i> <span>${task[0].toUpperCase() + task.slice(1)}</span></p>
                </div>

                <div class="task-description" contenteditable="true">
                <p class="mb-0"><i class="fas fa-long-arrow-alt-right"></i> <span>${(details) ? details[0].toUpperCase() + details.slice(1) : ""}</span></p>
   
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
    }

    document.getElementById('user-input-title').value = "";
    document.getElementById('user-input-details').value = "";
    
}