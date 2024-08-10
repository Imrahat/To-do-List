
const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask(){

    if (inputBox.value=="") {
        alert("Please Add Your Todo First")
    }else{
         let li = document.createElement("li");
         li.innerHTML = inputBox.value;
         listContainer.appendChild(li);
         let span = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);
         inputBox.value = "";
         saveData();
    }
   
    

}
listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
})


function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}

function getData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
getData()
















































// const todoInput=document.querySelector(".todoInput");
// const todoContainer = document.querySelector(".todoContainer");
// const liContainer = document.querySelector(".liContainer");


// function addTodo(){
    
//     let input=document.createElement("input");
//     input.type="text";
//     input.value.readOnly;
//     input.value=todoInput.value;

//     liContainer.appendChild(input)



//     // let li=document.createElement("li");
//     // li.document.createElement("input");
//     // li.textContent=todoInput.value;
   
//     // console.log(li);
//     // todoContainer.appendChild(li);
   

// }
