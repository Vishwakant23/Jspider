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
                <button class="close float-end">
                    // <i class="fa fa-times-circle"></i>
                </button>
            </span>
        </li>`
        }

        document.querySelector('#task-list').innerHTML=eachTask;
    }
}

displayTasks();