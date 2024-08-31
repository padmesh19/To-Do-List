let button = document.getElementById('add-btn');
let todoList = document.getElementById('todo-show');
let input = document.getElementById('todo-input');
let time = document.getElementById('todo-time')
let cta = document.getElementById('cta');
let feature = document.getElementById('features');
let testimonial = document.getElementById('testimonials');

//local storage
let todos = [];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

function listPage(){
    cta.style.display = "none";
    feature.style.display = "none";
    testimonial.style.display = "none";
    document.getElementById('todo-app').style.display = "block"
    document.getElementById('todo-list').style.display = "block"

}

function homePage(){
    cta.style.display = "block";
    feature.style.display = "block";
    testimonial.style.display = "block";
    document.getElementById('todo-app').style.display = "none"
    document.getElementById('todo-list').style.display = "none"
}

button.addEventListener('click',()=>{
    if(input.value){
        let task = []
        task.push(input.value);
        task.push(time.value);
        todos.push(task);
        localStorage.setItem('todos',JSON.stringify(todos))
        addtodo(task);
        task=[];
        input.value="";
        time.value="";
    }
})

function addtodo(task){
    let myList = document.createElement('ul');
    myList.setAttribute("id","todo-task");
    let myTask = document.createElement('li');
    myTask.setAttribute("class","list1");
    myTask.innerText = task[0];
    let myTime = document.createElement('li');
    myTime.setAttribute("class","list2");
    myTime.innerText = task[1];
    myList.appendChild(myTask);
    myList.appendChild(myTime);
    todoList.appendChild(myList)
    myList.addEventListener('click',()=>{
        myList.style.textDecoration = 'line-through'
        remove(task)
    })
    myList.addEventListener('dblclick',()=>{
        todoList.removeChild(myList)
        remove(task)
        
    })
}

function remove(task){
    let index = todos.indexOf(task)
    if (index > -1) {
        todos.splice(index, 1);
      }
    localStorage.setItem('todos',JSON.stringify(todos))
}