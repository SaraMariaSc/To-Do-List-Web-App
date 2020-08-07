var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var done = document.querySelectorAll(".done");
var deleteButton = document.querySelectorAll(".delete");

//ADD NEW ITEMS
function inputLength(){
    return input.value.length
}

function createListElement(){
    var p = document.createElement("p");
    p.classList.add("done");
    removeDone(p);
    p.innerHTML = input.value;

    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");    
    deleteBtn.classList.add("button-spacing");    
    deleteBtn.innerHTML = "Delete";

    var liNew = document.createElement("li");
    liNew.appendChild(deleteBtn);
    liNew.appendChild(p);
    ul.appendChild(liNew);
    input.value="";

    deleteBtn.addEventListener("click",event => {deleteItem(deleteBtn);})
    p.addEventListener("click", event => {toggleDone(p);})
}

function addListAfterClick(){
    if(inputLength() > 0)
    { 
        createListElement();
    }
}

function addListAfterEnter(event){
    if(inputLength() > 0 && event.keyCode === 13)
    { 
        createListElement();        
    }
}

button.addEventListener("click", addListAfterClick );
input.addEventListener("keypress", addListAfterEnter );

//TOGGLE DONE 
function toggleDone(element){
     element.classList.toggle("done");
 }
function removeDone(element){
    element.classList.remove("done");
}
done.forEach(element => {removeDone(element);});
done.forEach(element => {
    element.addEventListener("click", event => {toggleDone(element);})
});

//DELETE
function deleteItem(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
}

deleteButton.forEach( element =>{
    element.addEventListener("click", event => {
        deleteItem(element);
    })
} )




