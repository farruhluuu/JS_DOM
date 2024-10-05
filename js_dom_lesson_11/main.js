// let inp =document.querySelector("input");
// inp.onclick = showMessage;
// inp.onclick = null;

// function showMessage() {
//     alert('hello world');
//     alert(this.tagName);
// }

// function showMessage(event) {
//     alert(event.currentTarget.tagName);
// }



// event.type
// event.clientX / event.clientY
// element.addEventListener(event, handler[,options])


// let inp = documnet.querySelector('input');
// inp.addEventListener('click', showMessage);
// inp.addEventListener('click', function(event) {
//     console.log(event.clientX, event.clientY);
// })

// function showMessage(event) {
//     alert(event.currentTarget.tagName);
// }




// let inp = documnet.querySelector('input');
// inp.addEventListener("click", showMessage);
// inp.addEventListener("click",function(event) {
//     console.log(event.clientX, event.clientY);
// });

// inp.removeEventListener("click", showMessage);
// function showMessage(event) {
//     alert(event.currentTarget.tagName);
// }





// let inp = documnet.querySelector('input');
// // inp.addEventListener("transitionend",showMessage);
// inp.addEventListener("click", {
//     handleListener(event) {
//         console.log("События" + event.type)   
//     } 
// });

// function showMessage(event) {
//     alert(event.currentTarget.tagName)
// }





class MyHandler {
    handleEvent(event) {
        console.log("Событие: " + event.type);
    }
}

let inp = document.querySelector("input");
inp.addEventListener("click",new MyHandler() );

function showMessage(event) {
    alert(event.currentTarget.tagName)
}