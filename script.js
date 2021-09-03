
const onEnter = (e) => {
    if (e.key === "Enter") {
        createTask();
    }
}

const deleteTask = (e) => {
    e.target.parentElement.remove();
}

const createTask = () => {
    let task = document.getElementById('user-input-title').value;
    let details = document.getElementById('user-input-details').value;
    let toDoList = document.querySelector('.to-do-list-items');
    let taskItem = `
        <div class="individual-task-container">
                <div class="todo-item-container">
                    <div class="check"></div>
                    <!-- <div class="tasks-container"> -->
                    <div class="task-full-info">
                        <div class="task-details">
                            <div class="todo-item">
                                ${task[0].toUpperCase() + task.slice(1)}
                            </div>
                        </div>
                        <div class="task-description">
                            ${details[0].toUpperCase() + details.slice(1)}
                        </div>
                    </div>
                </div>
                <div class="delete-item" onclick="deleteTask(event)">
                    X
                </div>
            </div>
    `;
   
    toDoList.insertAdjacentHTML('afterbegin', taskItem);
    document.getElementById('user-input-title').value = "";
    document.getElementById('user-input-details').value = "";
}

