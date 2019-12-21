//Variables 
var taskContainer = document.getElementById('tasks'),
    inputValue = document.getElementById("taskContents"),
    addTask = document.getElementById("addTask"),
    completedTaskContainer = document.getElementById('compeletedtasks'),
    item = document.createElement('li'),
    deleteButton = document.getElementById('cleartask');
    deletecompleteButton = document.getElementById('clearcompletetask');
    
//Create a new Task 
function createNewTask(){
    var item = document.createElement('li'),
        listContent = document.createTextNode(inputValue.value);
    item.appendChild(listContent);
    //Preventing the Creation of an Empty Task
    if(inputValue.value ===''){
        alert("Please ADD a Task");
    }else{
        taskContainer.prepend(item);
        document.getElementById("taskContents").value = "";
        item.className = 'newitem';
    }
    //Creating a Clear button to Clear ALL Tasks
    function clearTasks(){
        item.parentNode.removeChild(item);
    }
    deleteButton.addEventListener('click', clearTasks);
    //Adding the Finished Tasks to the CompletedTask section
    function completeTask(){
        completedTaskContainer.prepend(item);
    }
    item.addEventListener('click', completeTask);
    function clearcompleteTasks(){
        completedTaskContainer.removeChild(item);
    }
    //Creating a Clear button to Clear Completed Tasks only
    deletecompleteButton.addEventListener('click', clearcompleteTasks);
}
//Add the (createNewTask) fuction to the Button
addTask.addEventListener('click' , createNewTask);
