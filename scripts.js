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
  if (todoInput.value === "") {
    todoSubmit.style.transition = "1s";
    todoSubmit.style.color = "red";
    todoSubmit.style.background = "white";
    todoSubmit.addEventListener("transitionend", () => {
      todoSubmit.style.color = "";
      todoSubmit.style.background = "";
    });
  } else {
    fullList.innerHTML += `
  <li>
    <i class="far fa-circle"></i>
      ${todoInput.value}
    <i class="fas fa-times"></i>
  </li>`;
    todoInput.value = "";
  }
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
