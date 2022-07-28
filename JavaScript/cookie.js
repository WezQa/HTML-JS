//DOM -- Document Object Model
// Document 
const cookieCountElement = document.getElementById("cookie--count");
const addButtonElement = document.getElementById("add--button");
const saveButtonElement = document.getElementById("save--button");
const saveListElement = document.getElementById("save--list");
let count = 0;
const increment = () => {
    count++;
    cookieCountElement.textContent = count;
}
const reset = () => {
    count = 0;
    cookieCountElement.textContent = 0;
    
}





//Onclick -- which is a attribute within html itself