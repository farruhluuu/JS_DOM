// let elem = document.querySelector("div.msg");
// console.log(elem.className);    

// let elem2 = elem.nextSibling.nextSibling;
// console.log(elem2.style.top);    

// let elem = document.querySelector("div.msg");
// elem.className = "message";


// elem.className
// elem.classList
// elem.style

// elem.classListadd/remove('class') - добавить/удалить класс
// elem.classList.toggle("class") - добавить классб если его нет, иначе удалить
// elem.classList.contains("class") - проверка наличии класса возвращает true/false

// let elem = document.querySelector('div');
// elem.classList.add("ex");
// elem.classList.remove("ex");

// for(let cl of elem.classList)
//     console.log(cl);



let elem = document.querySelector('div');
// let coordY = 0;
// let idMove = setInterval(function() {
//     coordY += 5;
//     elem.style.top = coordY + "px";
// }, 50);

// let idMove = setInterval(function() {
//     if(!elem.style.display) elem.style.display = "none";
//     else elem.style.display = "";
// }, 100)
// setTimeout(()=>clearInterval(idMove), 3000);

// elem.style.cssText = `color: red; font-size: 18px; background-color: green;`

// console.log(elem.style.width)


// let objStyles = getComputedStyle(element, [pseudo]);

let objStyles = getComputedStyle(elem);
console.log(objStyles.width);
