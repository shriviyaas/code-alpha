// JavaScript code to manage the to-do list
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-button");
    const pendingList = document.getElementById("pending-list");
    const completedList = document.getElementById("completed-list");

    // Function to create a new task item
    function createTaskItem(taskText) {
        const listItem = document.createElement("li");
        listItem.innerText = taskText;

        // Create buttons for completing and deleting tasks
        const completeButton = document.createElement("button");
        completeButton.innerText = "Complete";
        completeButton.addEventListener("click", function () {
            moveToCompleted(listItem);
        });

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function () {
            deleteTask(listItem);
        });

        // Add buttons to the task item
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        return listItem;
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = createTaskItem(taskText);
            pendingList.appendChild(taskItem);
            taskInput.value = "";
        }
    }

    // Function to move a task to the completed list
    function moveToCompleted(taskItem) {
        completedList.appendChild(taskItem);
        taskItem.querySelector("button:first-child").remove(); // Remove "Complete" button
    }

    // Function to delete a task
    function deleteTask(taskItem) {
        taskItem.remove();
    }

    // Event listener for adding a new task
    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
