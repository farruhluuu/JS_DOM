// document.addEventListener("mouseup", ()=>console.log("mouseup"));
// document.addEventListener("click", ()=>console.log("click"));
// document.addEventListener("mousedown", ()=>console.log("mousedown"));
// document.addEventListener("dblclick", ()=>console.log("dblclick"));



// document.addEventListener("mousedown", ()=>console.log("mousedown: "+event.which));
// document.addEventListener("mouseup", ()=>console.log("mouseup: "+event.which));



// documnet.addEventListener("click", (event) => {
//     // if(event.shiftKey && event.ctrlKey)
//     if(event.shiftKey && (event.ctrlKey || event.metaKey))


//         console.log("click");
// });



// document.addEventListener("mousemove",
//     (event) => console.log("mousemove: "+event.clientX+", "+event.clientY+", "+event.clientY
// ));



// document.addEventListener("mouseover", (event) => {
//     let prop = "target = "+event.target.tagName;
//     if(event.relatedTarget != null)
//         prop+=", relatedTarget = "+event.relatedTarget.tagName;
//     console.log("mouseover: "+prop);
// });


// document.addEventListener("mouseout", (event) => {
//     let prop = "target = "+event.target.tagName;
//     if(event.relatedTarget != null)
//         prop+=", relatedTarget = "+event.relatedTarget.tagName;
//     console.log("mouseout: "+prop);
// });




// let div = document.querySelector("div.parent");
// div.addEventListener("mouseenter", showInfo);

// function showInfo(event) {
//     let prop = "target = "+event.target.tagName;
//     if(event.relatedTarget != null) 
//         prop+=", relatedTarget = "+event.relatedTarget.tagName;
//     let name = event.currentTarget.tagName;
//     console.log(name+" moussenter: "+prop);
// }



// let div = document.querySelector("div.parent");
// div.addEventListener("mouseleave", showInfo);

// function showInfo(event) {
//     let prop = "target = "+event.target.tagName;
//     if(event.relatedTarget != null) 
//         prop+=", relatedTarget = "+event.relatedTarget.tagName;
//     let name = event.currentTarget.tagName;
//     console.log(name+" mousseleave: "+prop);
// }







