let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function (){
    let chkBox = document.createElement("input");
    chkBox.type = "checkbox";
    let outerSpan = document.createElement("span");
    let innerSpan = document.createElement("span");
    let item = document.createElement("li");
    innerSpan.innerText = inp.value;
    
    let delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerText = "Delete";


    chkBox.addEventListener("change", function(){
    if(this.checked){
        innerSpan.style.textDecoration = "line-through"
    } else {
        innerSpan.style.textDecoration = "none";
    }
})
    
    item.appendChild(outerSpan);
    outerSpan.appendChild(chkBox);
    outerSpan.appendChild(innerSpan);
    item.appendChild(delBtn)
    ul.appendChild(item);


    inp.value = "";
})

// let delBtns = document.querySelectorAll(".delete");

// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove();
//     })
// }

ul.addEventListener("click", function(event){
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})

let existingChkBoxes = document.querySelectorAll("input[type = 'checkbox");

for(chkBox of existingChkBoxes){
    chkBox.addEventListener("change", function(){
    if(this.checked){
        innerSpan.style.textDecoration = "line-through"
    } else {
        innerSpan.style.textDecoration = "none";
    }});
}