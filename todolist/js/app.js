// UI
const form = document.getElementById('task-form');
const taskinput = document.getElementById('task');
const filter = document.getElementById('filter');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');


function addtask(e){
    // console.log('ahay');

    /* if(taskinput.value === ''){
        window.alert("Add a task");
    } */

    // this will happen reload & clear all previous input data
    if(taskinput.value === ''){
        window.alert("Add a task");
        return;
    }

    // console.log(taskinput.value);

    // create li element
    const li = document.createElement('li');

    // add class
    // li.classList.add('collection-item');
    li.className = "collection-item";


    // create text node append to li
    li.appendChild(document.createTextNode(taskinput.value));

    // create link
    const link = document.createElement('a');

    // add class
    link.className = "delete-item secondary-content";

    // add icon
    link.innerHTML = `<i class = "far fa-trash-alt"></i>`;

    // console.log(link);

    // append link to li
    li.appendChild(link);

    // console.log(li);

    // append li to ul
    tasklist.appendChild(li);

    // store in localStorage
    storetaskinlocalstorage(taskinput.value);

    e.preventDefault();

    taskinput.value = "";
}

// Remove Task
function removetask(e){
    // console.log('hay');

    // console.log(e.target);

    // console.log(e.target.parentElement);

    //   i      a
    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log('delete item');

        if(confirm('Are you sure')){
            e.target.parentElement.parentElement.remove();
        }
    }

    // Remove task from localStorage
                                // i    
    removetaskfromlocalstorage(e.target.parentElement.parentElement);
}

// Clear Tasks
function cleartasks(){
    // console.log('ahay');

    // Method 1
    // tasklist.innerHTML = '';

    // Method 2
    // console.log(tasklist);
    // console.log(tasklist.childElementCount);

    /* let x = 0;
    while(x < tasklist.childElementCount){
        tasklist.removeChild(tasklist.firstChild);
    } */


    // Method 3
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }

    // clear all data from localStorage
    cleartasksfromlocalstorage();
}


// Store Task
function storetaskinlocalstorage(task){
    // console.log(task);

    let tasks;

    /* if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = localStorage.getItem('tasks');
    } */

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
        // console.log(typeof tasks);
    }

    tasks.push(task);

    // console.log(tasks);

    localStorage.setItem('tasks',JSON.stringify(tasks));

}

// Get task from localStorage
function gettasks(){
    // console.log('hay');

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task)=>{
        // console.log(task);

        // create li element
        const li = document.createElement('li');

        // add class
        li.className = "collection-item";

        // create text note and append to li
        li.appendChild(document.createTextNode(task));

        // create new link element
        const link = document.createElement('a');
        
        // add class
        link.className = "delete-item secondary-content";

        // add icon
        link.innerHTML = `<i class="far fa-trash-alt"></i>`;
        
        // append link into li
        li.appendChild(link);

        // console.log(li);

        // append li into ul
        tasklist.appendChild(li);
    });

}
// gettasks();


// Remove task from localStorage
function removetaskfromlocalstorage(taskitem){
    // console.log('hay');
    // console.log(taskitem);
    /* console.log(taskitem.textContent);
    console.log(taskitem.innerText); */

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks=[];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task,index)=>{
        // console.log(task);

        if(taskitem.textContent === task){
            // where we want to start (index), where we want to end (how many)
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Clear All Data from localStorage
function cleartasksfromlocalstorage(){
    localStorage.clear();
}

// Filter Tasks
function filtertasks(e){
    // console.log('hay');
    // console.log(e.target);

    const inputfilter = e.target.value.toLowerCase();
    // console.log(inputfilter);

    const tasks = document.querySelectorAll('.collection-item');
    // console.log(tasks);

    tasks.forEach((task)=>{
        // console.log(task);
        const item = task.firstChild.textContent.toLowerCase();
        // console.log(item);

        if(item.indexOf(inputfilter) !== -1){
            task.style.display = "block";
        }else{
            task.style.display = "none";
        }
    });

}

// Event Listener
// Add Task
form.addEventListener('submit',addtask);

// Remove task
tasklist.addEventListener('click',removetask);

// clear task
clearbtn.addEventListener('click',cleartasks);

// DOM Load Event
document.addEventListener('DOMContentLoaded',gettasks);

// Filter task event
filter.addEventListener('keyup',filtertasks);

// 11L1S WDFXXXX