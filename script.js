
const inputField = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");


addBtn.addEventListener("click", addTask);


function addTask() {
    const taskText = inputField.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const newTask = document.createElement("li");
newTask.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "li-style");


const taskTextElement = document.createElement("span");
taskTextElement.textContent = taskText;

const deleteButton = document.createElement("button");
deleteButton.classList.add("delete-btn", "btn", "btn-sm", "btn-danger");
deleteButton.textContent = "Delete";


taskTextElement.addEventListener("click", function () {
    console.log("Task clicked!");
    this.classList.toggle("completed");
});


deleteButton.addEventListener("click", function () {
    todoList.removeChild(newTask);
});


newTask.appendChild(taskTextElement);
newTask.appendChild(deleteButton);

todoList.appendChild(newTask);

}
