let addButton = document.getElementById("add-Btn");
let Input = document.getElementById("input-Bar");
let todoList = document.querySelector(".todo-list");

addButton.addEventListener("click", function () {
  if (Input.value === "") {
    return;
  }
  let li = document.createElement("li");
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });
  li.innerText = Input.value;
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  Input.value = "";
});
