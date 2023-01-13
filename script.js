let taskInput = document.getElementById("inputText");

let dateInput = document.getElementById("inputDate");

let addButton = document.getElementById("buttonAdd");

let taskList = document.getElementById("taskList");

const deleteTask = (event) => {
  console.dir(event.target.parentNode);
  event.target.parentNode.remove();
};

const done = (e) => {
  const parentEl = e.target.parentNode.classList;
  if (parentEl.contains("done")) {
    parentEl.remove("done");
  } else {
    parentEl.add("done");
  }
};
const createTaskItem = () => {
  let task = taskInput.value;
  let deadline = dateInput.value;
  let closeBtn = document.createElement("button");
  closeBtn.style = "width: 30px; background-color: rgb(255, 17, 0); margin: 0;";
  closeBtn.innerText = "x";
  closeBtn.addEventListener("click", deleteTask);
  let doneBtn = document.createElement("button");
  doneBtn.style = "width: 30px; background-color: rgb(149, 255, 0); margin-left: 10px;";
  doneBtn.innerText = "✓";
  doneBtn.addEventListener("click", done);
  console.log({ task, deadline });
  //   console.dir(task);
  let taskItem = document.createElement("p");
  taskItem.innerHTML = task + " " + deadline;
  taskList.append(taskItem);
  taskItem.append(closeBtn);
  taskItem.append(doneBtn);
};
addButton.addEventListener("click", createTaskItem);

addButton.addEventListener("click", createTaskItem);
