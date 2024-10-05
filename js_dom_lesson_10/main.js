// let wnd = document.getElementById("wnd");
// let centerX = document.documentElement.clientWidth/2;
// let centerY = document.documentElement.clientHeight/2;
// wnd.style.left = centerX + "px";
// wnd.style.top = centerY - wnd.offsetWidth/2 + "px";
// wnd.style.top = centerY - wnd.offsetHeight/2 + "px";

// let coords = wnd.getBoundingClientRect();
// console.log(coords);


// let elem = document.elementFromPoint(x, y);


let wnd = document.getElementById('wnd');
console.log( getCoorFromDocument(wnd) );

function getCoorFromDocument(elem) {
    let coords = elem.getBoundingClientRect();
    return {
        top: coords.top + window.pageYOffset,
        laft: coords.left + window.pageXOffset,

    }
}