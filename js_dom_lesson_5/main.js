// let body = document.body;
// body.myStyle = {
//     color: "red",
//     fontSize: 20
// };

// body.getFontSize = function() {
//     return this.myStyle.fontSize;
// };

// console.log(body.myStyle.fontSize);


// elem.hasAttribute(name)-проверяет наличия атрибута
// elem.getAttribute(name)-получает значения атрибута
// elem.setAttribute(name, value)-устанавливает значения атрибута
// elem.removeAttribute(name)-удаляет атрибут.



// let  div = document.getElementById('comm');
// console.log( div.getAttribute("deflt") );
// div.setAttribute("deflt", "новое значения");
// console.log( div.getAttribute("deflt") ); 


// for(let val of div.attributes){
//     console.log( val );
// }

// let flSkip = false;
// for(let cell of document.querySelectorAll('[cell-red]')) {
    // let attr = cell.getAttribute('cell-red');
    // cell.style.background = attr;

//     if(!flSkip) cell.setAttribute('cell-red','lightRed');
//     flSkip = !flSkip;
// }


let flSkip = false;
for(let cell of document.querySelectorAll('[data-cell-red]')) {
    // if(!flSkip) cell.setAttribute('data-cell-red','lightRed');
    if(!flSkip) cell.dataset.cellRed = 'lightRed';
    flSkip = !flSkip;
}



