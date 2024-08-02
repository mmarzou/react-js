document.getElementById("addTaskBtn").addEventListener("click", function () {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    let li = document.createElement("li");
    li.textContent = taskInput.value;
    li.classList.add("list-group-item");
    taskList.appendChild(li);

    // Ajoutez un bouton pour supprimer la tâche
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "float-right");
    deleteBtn.addEventListener("click", function () {
      taskList.removeChild(li);
    });
    li.appendChild(deleteBtn);

    taskInput.value = "";
  }
});
