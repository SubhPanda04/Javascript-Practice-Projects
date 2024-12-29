const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

function showAllTasks() {
     tasks.forEach((value,index)=>{
        const div = document.createElement("div");
        div.setAttribute("class","task");
        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const innerP = document.createElement("p");
        innerP.innerText = value.title;
        innerDiv.append(innerP);

        const innerSpan = document.createElement("span");
        innerSpan.innerText = value.description;
        innerDiv.append(innerSpan);

        const delBtn = document.createElement("button");
        delBtn.setAttribute("class","deleteBtn");
        delBtn.innerText = "-";
        delBtn.addEventListener("click",()=> {
            removeTask();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks)); 
            showAllTasks();
        });

        div.append(delBtn);
        container.append(div);
        
     }); 
}

function removeTask() {
    tasks.forEach(()=> {
       const div = document.querySelector(".task");
       div.remove(); 
    });
}

form.addEventListener("submit",(e)=> {
    e.preventDefault();
    removeTask();
    tasks.push({
        title: title.value,
        description: description.value
    });
    localStorage.setItem("tasks",JSON.stringify(tasks)) ;
    showAllTasks();
});