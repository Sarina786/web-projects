// Define UI veribles

const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');

// Load all event listeners
loadEventListeners();

// Load all event listeners functions
function loadEventListeners(){
    // DOM load events
    document.addEventListener('DOMContentLoaded',getTasks);
    // Add task event
    form.addEventListener('submit',addTask);
    //Removre task event
    taskList.addEventListener('click',removeTask);
    //clear task event
    clearBtn.addEventListener('click',clearTasks);
    //Filter tasks
    filter.addEventListener('keyup',filterTasks);
}

// add task
function addTask(e){
    if(taskInput.value=== ''){
        alert('add a task!');
    }
    //craete li element
    const li = document.createElement('li');
    li.className='collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new a element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    //Append the li to ul
    taskList.appendChild(li);
    //Store in Local Storage
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';
    e.preventDefault();
}
//Dom loaded
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks =[];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        const li = document.createElement('li');
        li.className='collection-item';
        //create text node and append to li
        li.appendChild(document.createTextNode(task));
        //create new a element
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        //add icon html
        link.innerHTML = '<i class = "fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);
        //Append the li to ul
        taskList.appendChild(li);
    }) ;    
}
// Store in LS
function storeTaskInLocalStorage(task){
let tasks;
if(localStorage.getItem('tasks')=== null){
    tasks =[];
}
else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
}
tasks.push(task);
localStorage.setItem('tasks',JSON.stringify(tasks));
}
//Remove task
function removeTask(e){
if(e.trget.parentElement.classList.contains('delete-item')){
    if(confirm(alert('Are You sure ?'))){
        e.target.parentElement.parentElement.remove();

        //Remove from LS
        removeTaskFromLocalStorage( e.target.parentElement.parentElement);
    }
}
}
//Remove from LS
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks =[];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task,index){

        if(taskItem.textContent === task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));

}
// Clear tasks
function clearTasks(){
   // taskList.innerHTML = '';
   while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);

   }
   // Clear from Ls
   clearTasksFromLocalStorage();
}
//Clear from Ls
function clearTasksFromLocalStorage(){
localStorage.clear();
}

//Filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            }
            else{
                task.style.display = 'none';

            }
        }
    );
}

