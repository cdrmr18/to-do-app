
const onEnter = (e) => {
    if (e.key === "Enter") {
        createTask();
    }
}

const createTask = () => {
    let task = document.getElementById('user-to-do-input').value;
    let toDoList = document.querySelector('.to-do-list-items');

    let taskItem = `
        <div class="todo-item-container">
                <div class="todo-item">
                    <div class="check"></div>
                    <p class="m-0 p-0">${task[0].toUpperCase() + task.slice(1)}</p>
                </div>
                <div class="delete-item">
                    X
                </div>
         </div>
    `;
    toDoList.insertAdjacentHTML('afterbegin', taskItem);
    document.getElementById('user-to-do-input').value = "";
}

