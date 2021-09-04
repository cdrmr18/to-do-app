// selectors
const toDoButton = document.getElementById('to-do-button');

const deleteTask = (e) => {
    e.target.parentElement.remove();
}

const markComplete = (e) => {
    let completeTask = document.getElementById('complete-tasks');
    if (e.target.classList.contains('complete')) {
        e.target.classList.remove("complete");
    } else {
        e.target.className += ' complete';
    }
}

const createTask = (e) => {
    e.preventDefault();
    let task = document.getElementById('user-input-title').value;
    let details = document.getElementById('user-input-details').value;
    
    let toDoList = document.querySelector('.to-do-list-items');
    let taskItem = `
        <div class="individual-task-container mt-1">
                    <div class="todo-item-container">
                        <div class="check" onclick="markComplete(event)"></div>
                        <div class="task-full-info">
                            <div class="task-details">
                                <div class="todo-item">
                                   ${task[0].toUpperCase() + task.slice(1)}
                                </div>
                            </div>
                            <div class="task-description">
                              ${(details) ? details[0].toUpperCase() + details.slice(1) : ""}
                            </div>
                        </div>
                    </div>
                    <div class="delete-item" onclick="deleteTask(event)">
                        <button class="btn delete-button-bg">🗑️</button>
                    </div>
                </div>
    `;
   
    toDoList.insertAdjacentHTML('afterbegin', taskItem);
    document.getElementById('user-input-title').value = "";
    document.getElementById('user-input-details').value = "";
}

