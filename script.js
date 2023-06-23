// Sample data for initial testing
let tasks = [
    // {
    //     title: "Task 1",
    //     description: "Description 1",
    //     dueDate: "2023-06-25",
    //     status: "in-progress"
    // },
    // {
    //     title: "Task 2",
    //     description: "Description 2",
    //     dueDate: "2023-06-27",
    //     status: "completed"
    // }
];

// Function to render tasks
function renderTasks() {
    const tasksContainer = document.getElementById("tasks");
    tasksContainer.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p><strong>Due Date:</strong> ${task.dueDate}</p>
            <p><strong>Status:</strong> ${task.status}</p>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;

        tasksContainer.appendChild(taskElement);
    });
}

// Function to add a new task
function addTask(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const status = document.getElementById("status").value;

    const newTask = {
        title,
        description,
        dueDate,
        status
    };

    tasks.push(newTask);
    renderTasks();

    // Clear form inputs
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("due-date").value = "";
    document.getElementById("status").value = "in-progress";
}

// Function to edit a task
function editTask(index) {
    const task = tasks[index];

    // Implement your edit functionality here, e.g., show a modal with task details and update the task on save
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Attach event listener to form submission
document.getElementById("task-form").addEventListener("submit", addTask);

// Initial rendering of tasks
renderTasks();
