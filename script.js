const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// we gonna need the submit on the task form.Instead of putting it on a global scope, we wiil
//a function to load all event listeners,
loadEventListener();
// load all event listeners
function loadEventListener() {
    //add task event
    form.addEventListener("submit", addTask);

// remove task event
    taskList.addEventListener("click", removeTask);

    //clear task event
    clearBtn.addEventListener("click", clearTasks);
    // filter task event
    filter.addEventListener("keyup", filterTasks);
}

function addTask(e) {
   
    if (taskInput.value == "")
    {
        alert("Add a task");
    }
    // create li element
    const li = document.createElement("li")
    //add class
    li.className = "collection-item";
    //create text node and append to li

    li.appendChild(document.createTextNode(taskInput.value))

    // create new link element

    const link = document.createElement("a")
    link.className = "delete-item secondary-content"
    
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);

    //append li to ul

    taskList.appendChild(li);
    taskInput.value = "";

     e.preventDefault();
}

// remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains("delete-item"))
    {
        if (confirm("Are you sure?"))
        {
            e.target.parentElement.parentElement.remove();
        }
        
      
    }

      console.log(e.target)
}

//Clear tasks
function clearTasks() {
    // taskList.innerHTML = "";

    //or

    //faster
    while (taskList.firstChild) //while taskList still have firstChild
    {
        taskList.removeChild(taskList.firstChild) //removing the li
    }
}


//filter task
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    // console.log(text)
    document.querySelectorAll(".collection-item").forEach(function (task) {
        const item = task.firstChild.textContent; 
        if (item.toLowerCase().indexOf(text) != -1) //if there's no match,its gonna equal to negative 1
        {
            task.style.display = "block";
        }

        else
        {
            task.style.display = "none";
        }
            
    })
    

}