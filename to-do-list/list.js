let taskEl=document.querySelector('#task-submit');

taskEl.addEventListener('submit',function(e)
{
    e.preventDefault();
    let inputEl=document.querySelector('#input-ele');
    let task=inputEl.value.trim();

    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    taskList.unshift(task);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTasks();
    inputEl.value='';
});

//display Tasks

function displayTasks()
{
    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    if(taskList.length>0)
    {
        let eachTask=``;
        for(let task of taskList)
        {
            eachTask+=`<li class="list-group-item list-group-item-dark mb-2">
            <span>${task}
                <button class="close float-end ms-2">
                <i class="ri-close-circle-line"></i>
                </button>
                <button class="update float-end">
                <i class="ri-file-list-2-line"></i>
                </button>
            </span>
        </li>`
        }

        document.querySelector('#task-list').innerHTML=eachTask;

          // Add event listeners to delete buttons
          let deleteButtons = document.querySelectorAll('.close');
          deleteButtons.forEach(button => {
              button.addEventListener('click', function() {
                  let index = parseInt(this.getAttribute('data-index'));
                  taskList.splice(index,1); // Remove task from the list
                  localStorage.setItem('tasks', JSON.stringify(taskList)); // Update local storage
                  displayTasks(); // Refresh displayed tasks
              });
          });// Add event listeners to delete buttons
    }
}

displayTasks();