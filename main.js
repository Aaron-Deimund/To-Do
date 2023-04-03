function addTask(taskTitle) {
    if (!taskTitle) {
        return;
    }

    const newTaskContainer = document.createElement('div');
    newTaskContainer.id = 'task-group';

    const newTaskTitle = document.createElement('li');
    newTaskTitle.classList.add('task-title');
    newTaskTitle.innerText = taskTitle;

    newTaskContainer.appendChild(newTaskTitle);
    newTaskContainer.addEventListener('click', () => {
        newTaskContainer.parentElement.removeChild(newTaskContainer);
    });

    document.querySelector('#unfinished-tasks').appendChild(newTaskContainer);

}

function removeTask(element) {

}

document.querySelector('#add-task-form').addEventListener("submit", e => {
    const newTaskTitle = document.querySelector('#new-task-title');
    e.preventDefault();
    addTask(newTaskTitle.value);
    newTaskTitle.value = '';

});
