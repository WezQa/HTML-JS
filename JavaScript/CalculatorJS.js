const clearButtonElement = document.getElementById("=");

let count = form1.answer.value;


function ClearAll() {
    let li = document.createElement("li");
    let liText = document.createTextNode(count);
    li.appendChild(liText);
    saveListElement.appendChild(li);
    clear();
}

clearButtonElement.addEventListener(`click`,ClearAll);