let sentences =["Welcome to Royal challengers","I love Javascript", "The next page Will opne in same tab - it default target","The next page will open innew tab only 1st click","The next page will opne in new tab every click"]

let container1 = document.getElementById("container");
let btn2 = document.getElementById("test1");
let btn3 = document.getElementById("test2");
let btn4 = document.getElementById("test3");
let btn5 = document.getElementById("test4");
let btn6 = document.getElementById("test5");


btn2.addEventListener("click", function(){
    container1.textContent = sentences[0]
})
btn3.addEventListener("click", function(){
    container1.textContent = sentences[1]
})
btn4.addEventListener("click", function(){
    container1.textContent = sentences[2]
})
btn5.addEventListener("click", function(){
    container1.textContent = sentences[3]
})
btn6.addEventListener("click", function(){
    container1.textContent = sentences[4]
})
