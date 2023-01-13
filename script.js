let taskInput = document.getElementById("inputText");

let dateInput = document.getElementById("inputDate");

let addButton = document.getElementById("buttonAdd");

let taskList = document.getElementById("taskList");

const deleteTask = (event) => {
  console.dir(event.target.parentNode);
  event.target.parentNode.remove();
};

const createTaskItem = () => {
  let task = taskInput.value;
  let deadline = dateInput.value;
  let closeBtn = document.createElement("button");
  closeBtn.style = "width: 30px; background-color: red;";
  closeBtn.innerText = "x";
  closeBtn.addEventListener("click", deleteTask);
  console.log({ task, deadline });
  //   console.dir(task);
  let taskItem = document.createElement("p");
  taskItem.innerHTML = task + " " + deadline;
  taskList.append(taskItem);
  taskItem.append(closeBtn);
};

addButton.addEventListener("click", createTaskItem);
