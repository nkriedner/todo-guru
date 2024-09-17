// SELECT DOM ELEMENTS (todoInput, submitButton, todoList)
const todoInput = document.querySelector("input");
const form = document.querySelector("form");
const todoList = document.querySelector("ul");

// CREATE CLICK EVENT LISTENER FOR SUBMIT BUTTON
form.addEventListener("submit", (event) => {
    // prevent default form submit behaviour
    event.preventDefault();

    // create a new todo li
    const newTodoLi = document.createElement("LI");

    // set text content of new todo li to the value of input
    newTodoLi.textContent = todoInput.value;

    // add "todo-item" class to new todo li
    newTodoLi.classList.add("todo-item");

    // append the new todo li to the todo list ul
    todoList.append(newTodoLi);

    // empty the input field and refocus
    event.target.reset();
    // todoInput.focus();
});

// CREATE CLICK EVENT LISTENER FOR ALL TODO LIST
// if the clicked element is a todo li ->
todoList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});

const newBlogPost = `
    <h1>${blogPostTitle}</h1>
    <p>Blablabla</p>
    <span>${dateOfToday}</span>
`;

document.querySelector("body").append(newBlogPost);
