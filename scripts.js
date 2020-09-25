// Selectors
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.childNodes[1];
const todoSubmit = todoForm.childNodes[2];
const fullList = document.querySelector("#todo-list");

// Listeners
todoSubmit.addEventListener("click", addListItem);
fullList.addEventListener("click", updateItems);

// Functions
function addListItem(e) {
  e.preventDefault();
  fullList.innerHTML += `<li>${todoInput.value}<span class="done">Done</span><span class="delete">Delete</span></li>`;
  todoInput.value = "";
}

function updateItems(e) {
  const item = e.target;
  if (item.innerText === "Delete") {
    //Delete Items
    item.parentNode.remove();
  } else if (item.innerText === "Done") {
    // Cross Out Items
    item.parentNode.style.textDecoration = "line-through";
  }
}
