// main_menu.addEventListener("click", function(event) {
//     let li = event.target;
//     console.log(li.innerHTML);
    
//     // let li = event.target.closest("li");
//     // if (li === null) return;
//     // console.log(li.dataset.command); 
    
// })



// let a = document.querySelector('a');
// a.onClick = function(event) {
//     event.preventDefault();
// }


documnet.addEventListener('contextmenu',function(event) {
    if (event.defaultPrevented) return; 
    // console.log("Контекстное меню документа");
    event.preventDefault();
    event.stopPropagation();
}, {passive: true});

main_menu.oncontextmenu = function(event) {
    console.log("Контекстное меню документа");
    
    event.preventDefault();
}


document.addEventListener("click", function(event) {
    let id = event.target.dataset.toggleId;
    if(!id) return;
    let elem = document.getElementById(id);
    if(!elem) return;
    elem.hidden = !elem.hidden;
});

let menuActs = {
    open() {alert("Open...");},
    save() {alert("Save...");},
}

main_menu.addEventListener("click", function(event) {
    let li = event.target.closest("li");
    if(li == null) return;

    let act = li.dataset.command;
    if(act && menuActs[act] !== undefined) menuActs[act]();
});