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
        } else {
            item.parentNode.parentNode.style.display = 'none';
        }
    } 
}


const openAddTask = () => {
    const addTaskDiv = document.getElementById('add-new-div');
    console.log('1')
    if (addTaskDiv.style.display === "block") {
        addTaskDiv.style.display = "none";
    } else {
        addTaskDiv.style.display = "block";
    }
}

const deleteTask = (e) => {
    let todoTask = e.target.parentElement.parentElement;
    todoTask.remove();
}

const editTask = (e) => { 
    e.preventDefault()
    // current task info
    let task = e.target.parentElement.previousElementSibling.querySelector('p');
    let details = e.target.parentElement.previousElementSibling.querySelector('.task-description p');
    // input for editing
    let taskInput = e.target.parentElement.previousElementSibling.querySelectorAll("input[type=text]")[0];
    let detailsInput = e.target.parentElement.previousElementSibling.querySelectorAll("input[type=text]")[1];

    if (e.target.classList.contains("fa-edit")) {
        e.target.classList.replace("fa-edit", "fa-check-circle");
    } else {
         e.target.classList.replace("fa-check-circle", "fa-edit");
    }

    if (task.classList.contains("edit-mode")) {
        task.classList.toggle("edit-mode");
        details.classList.toggle("edit-mode");
        taskInput.classList.toggle("edit-mode");
        detailsInput.classList.toggle("edit-mode");
        
        task.innerText = taskInput.value;
        details.innerText = detailsInput.value;
    } else {
        task.classList.toggle("edit-mode");
        details.classList.toggle("edit-mode");
        taskInput.classList.toggle("edit-mode");
        detailsInput.classList.toggle("edit-mode");

        taskInput.value = task.innerText;
        detailsInput.value = details.innerText ;
    }
}
// FUNCTION TO CREATE NEW DIV WITH NEW TASK ITEM
const createTask = (e) => {
    e.preventDefault()
    let toDoList = document.querySelector('.to-do-list-items');
    let task = document.getElementById('user-input-title').value;
    let details = document.getElementById('user-input-details').value;
    
    // creates new task div if title is not empty
    if (task != "") {
        let newTaskItem = `
            <div class="individual-task-container mt-2">
                <div class="todo-item-container">
                    <div class="todo-item">
                        <input type="text" class="title" value="" maxlength="15">
                        <p class="mt-0""> <span>${task[0].toUpperCase() + task.slice(1)}</span></p>
                    </div>
                    
                    <div class="task-description">
                        <input type="text" class="details" value="" maxlength="17">
                        <p class="mb-0""> <span>${(details) ? details[0].toUpperCase() + details.slice(1) : ""}</span></p>
                    </div>
                </div>
                <div class="edit-icon">
                    <i class="far fa-edit" onclick="editTask(event)"></i>
                </div>
                <div onclick="deleteTask(event)">
                    <button class="btn delete-button-bg">🗑️</button>
                </div>
                <div class="drag-icon">
                    <i class="fas fa-bars"></i>
                </div>
            </div>        
        `;
    
        toDoList.insertAdjacentHTML('afterbegin', newTaskItem);
        document.getElementById('user-input-title').value = "";
        document.getElementById('user-input-details').value = "";

    } else {
        alert("Task name cannot be empty");
        return;
    }
}