// Selectors
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.childNodes[1];
const todoSubmit = todoForm.childNodes[2];
const todoFilter = todoForm.childNodes[4];
const fullList = document.querySelector("#todo-list");

// Listeners
todoSubmit.addEventListener("click", addListItem);
fullList.addEventListener("click", updateItems);
todoFilter.addEventListener("change", filterItems);

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
  if (item.className === "fas fa-times") {
    //Delete Items
    item.parentNode.remove();
  } else if (item.className === "far fa-circle") {
    item.parentNode.style.textDecoration = "line-through";
    item.className = "fas fa-check-circle";
  } else if (item.className === "fas fa-check-circle") {
    item.parentNode.style.textDecoration = "none";
    item.className = "far fa-circle";
  }
}

function filterItems() {
  if (todoFilter.selectedIndex === 1) {
    for (let i = 0; i < fullList.children.length; i++) {
      if (fullList.children[i].style.textDecoration !== "line-through") {
        fullList.children[i].style.display = "none";
      } else {
        fullList.children[i].style.display = "list-item";
      }
    }
  } else if (todoFilter.selectedIndex === 2) {
    for (let i = 0; i < fullList.children.length; i++) {
      if (fullList.children[i].style.textDecoration === "") {
        fullList.children[i].style.display = "list-item";
      } else {
        fullList.children[i].style.display = "none";
      }
    }
  } else {
    for (let i = 0; i < fullList.children.length; i++) {
      fullList.children[i].style.display = "list-item";
    }
  }
}
