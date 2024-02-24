window.addEventListener('lode', () =>{
    const from = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");


    from.addEventListener('submit' , (e) =>{
        e.preventDefault();

        const task = input.value;

         if(!task) {
            alert("please fill out  the  task");
         }else{
            console.log("Sguccess");
         }



    })
})