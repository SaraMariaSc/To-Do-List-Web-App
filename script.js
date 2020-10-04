var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");
var li = document.querySelector("li");
var done = document.querySelectorAll(".done");
var deleteButton = document.querySelectorAll(".delete");
var randomImageArray = ["no-connection-6.png", "taxi-satch-virus-molecules.png", "waiting-6.png",
                        "taxi-uploading.png", "taxi-teamsport.png", "taxi.png",
                        "taxi-healthcare.png", "taxi-design.png", "taxi-610.png",
                        "taxi-594.png", "taxi-594.png", "taxi-564.png",
                        "taxi-6.png", "taxi-4.png", "taxi-2.png"];
var randomImageDiv = document.getElementById("random-image");

function changeRandomImage(imageAray){
    var num = Math.floor(Math.random() * imageAray.length);
    var img = imageAray[num];
    var imgHtml = "<img src=\"./img/" 
                 + img 
                 + "\" id=\"random-image\">";
    console.log(imgHtml);
    randomImageDiv.innerHTML = imgHtml;
}

changeRandomImage(randomImageArray);

//ADD NEW ITEMS
function inputLength(){
    return input.value.length;
}

function createListElement(){
    var p = document.createElement("p");
    p.classList.add("done");
    removeDone(p);
    p.innerHTML = input.value;

    // create delete icon button
    var deleteIcon = document.createElement("img");
    deleteIcon.classList.add("delete");    
    deleteIcon.classList.add("delete-icon");    
    deleteIcon.src = "img/delete.png";
    deleteIcon.alt = "delete-icon";

    var liNew = document.createElement("li");
    liNew.appendChild(deleteIcon);
    liNew.appendChild(p);
    ul.appendChild(liNew);
    input.value="";

    deleteIcon.addEventListener("click",event => {deleteItem(deleteIcon);})
    p.addEventListener("click", event => {toggleDone(p);})
}

function addListAfterEnter(event){
    if(inputLength() > 0 && event.keyCode === 13)
    { 
        createListElement();        
    }
}

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




