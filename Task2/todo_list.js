
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("taskList");


    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <i class="fas fa-check-circle" onclick="completeTask(this)"></i>
        <i class="fas fa-edit" onclick="editTask(this)"></i>
        <i class="fas fa-trash" onclick="deleteTask(this)"></i>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}


function completeTask(element) {
    const li = element.parentElement;
    li.classList.toggle("complete");
}


function editTask(element) {
    const li = element.parentElement;
    const taskText = li.firstChild.textContent;
    const newText = prompt("Edit task:", taskText);
    if (newText !== null) {
        li.firstChild.textContent = newText;
    }
}


function deleteTask(element) {
    const li = element.parentElement;
    li.remove();
}
