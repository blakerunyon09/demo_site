// Selectors
const todoForm = document.querySelector("#todo-form");
let todoInput = todoForm.childNodes[1];
const todoSubmit = todoForm.childNodes[3];
const fullList = document.querySelector("#todo-list");

// Listeners
todoSubmit.addEventListener("click", addListItem);

// Functions
function addListItem(e) {
  e.preventDefault();
  console.log(todoInput.value);
  fullList.innerHTML += `<li>${todoInput.value}`;
  fullList.innerHTML += `<span class="done">Done</span>`;
  fullList.innerHTML += `<span class="delete">Delete<span></li>`;
  todoInput.value = "";
}
