// =======================
// 1. Selectors / Elements
// =======================
const addTodoButton = document.getElementById("addTodo");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoListContainer = document.getElementById("todoListContainer");
const themeToggle = document.getElementById("themeToggle");



// ==========================
// 3. Utility / Helper Functions
// ==========================

function updateTodoVisibility() {
    if (todoList.children.length === 0) {
        todoListContainer.classList.add("hidden");
    } else {
        todoListContainer.classList.remove("hidden");
    }
}

// =============
// 4. Core Logic
// =============
function addTodoItem(todoText) {
    const li = document.createElement("li");
    li.className = "mui-item flex-between";

    const span = document.createElement("span");
    span.textContent = todoText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "mui-btn-danger mui-btn-small";

    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}

// =====================
// 5. Event Listeners
// =====================
themeToggle.addEventListener("change", () => {
    document.documentElement.setAttribute("data-theme", themeToggle.checked ? "dark" : "light");
});

document.addEventListener("keydown", (Event) => {
    if (Event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        Event.preventDefault();
        todoInput.focus();
    }
});

todoInput.addEventListener("keydown", (Event) => {
    if (Event.key === "Enter" && !Event.shiftKey && !Event.ctrlKey && !Event.altKey && !Event.metaKey && todoInput.value.trim()) {
        Event.preventDefault();
        addTodoButton.click();
    }
});

addTodoButton.addEventListener("click", () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        addTodoItem(todoText);
        updateTodoVisibility();
        todoInput.value = "";
    }
});

todoList.addEventListener("click", (Event) => {
    const target = Event.target;
    const li = target.closest("li");
    if (!li) return;
    // Delete todo item
    if (target.tagName === "BUTTON") {
        if (li) li.remove();
        updateTodoVisibility();
        return;
    }

    // Toggle completed state
    const span = li.querySelector("span");
    if (span) {
        span.classList.toggle("completed");
    }
});


// =====================
// 6. Init (On Page Load)
// =====================
updateTodoVisibility();