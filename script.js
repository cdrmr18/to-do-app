
const inputEnter = (event) => {
    const task = document.getElementById('user-to-do-input').value;
    createTask(task);
}

const createTask = (task) => {
    let taskItem = `
        <div class="todo-item-container">
                <div class="todo-item">
                    <div class="check"></div>
                    <p class="m-0 p-0">${task}</p>
                </div>
                <div class="delete-item">
                    X
                </div>
         </div>
    `;
    console.log(taskItem);
}

