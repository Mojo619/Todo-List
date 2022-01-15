const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newli = document.createElement("li");
    const newliInnerHtml = ` <span class="text"> ${newTodoText} </span><div class="todo-buttons"><button class="todo-btn done">Done</button><button class="todo-btn remove">Remove</button></div>`;
    
    newli.innerHTML = newliInnerHtml;
    todoList.append(newli);
    todoInput.value = " ";
});


todoList.addEventListener("click", (e) => {
  // check if user clicked on done button
  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});


