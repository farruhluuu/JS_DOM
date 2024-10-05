// let div = document.createElement("div");
// div.className = "msg";
// div.innerHTML = "Важная информация!"

// document.body.append(div);


// node.prepend(...nodes or strings)
// node.before(...nodes or strings)
// nodeafter(...nodes or strings)
// node.replaceWith(...nodes or strings)


// let list = document.querySelector("ul");
// list.before('before');
// list.after('after');

// let li_1 = document.createElement('li');
// li_1.innerHTML = "первый элемент";
// list.prepend(li_1);


// let li_2 = document.createElement('li');
// li_2.innerHTML = "последний элемент";
// list.append(li_2);

// let list = document.querySelector("ul");
// list.replaceWith(document.createElement("hr"),
//     "замена",
//     document.createElement("br"));



// let li = document.querySelector("ul > li:first-child");
// let list = document.querySelector("ul");
// list.append(li);


// let textNode = document.createTextNode('Текстовый элемент');
// document.body.append(textNode);

// document.body.append("<p>Текст с тегом");

// eleme.insertAdjacentHTML(where, html)

// beforebegin
// afterbegin
// deforend
// afterend

// let list = document.querySelector("ul");
// list.insertAdjacentHTML("beforebegin","<p>Список планет<hr>");
// list.insertAdjacentHTML("afterend","<hr><p>Конец списка");
// list.insertAdjacentHTML("afterbegin","<li>Солнце");
// list.insertAdjacentHTML("beforend","<li>Марс");


// let list = document.querySelector("ul");
// list.insertAdjacentText("beforebegin","<p>Список планет<hr>");

// let li = document.createElement("li");
// li.innerHTML = "<b>Солнце<b>";
// list.insertAdjacentElement("afterbegin", li);


// node.remove()


// let idRemove = setInterval(function() {
//     let li = document.querySelector("ul.list > li:last-child");
//     if(li === null) {
//         clearInterval(idRemove);
//         alert("Список удален");
//     }
//     else li.remove();
// }, 500);



// insertAdjacentText(where, text)
// insertAdjacentElement(where, elem)

// elem.cloneNode(flDeep);


// let t = documnet.querySelector("table");
// let r = documnet.querySelector("table>tbody>tr:last-child");

// let row = r.cloneNode(true);
// row.firstChild.innerHTML = "Венера";
// t.append(row);



// let fr = new DocumentFragment();
// let list = ["Меркурий", "Венера", "Земля", "Марс"];
// for(let p of list) {
//     let item = document.createElement('li');
//     item.innerHTML = p;
//     fr.append(item);
// }
// let ul = document.querySelector("ul");
// ul.append(fr);




// parent.appendChild(node)
// parent.insertBefore(node, nextSibling)
// parent.removeChild(node)
// parent.replaceChild(newElem, node)

// documnet.write(html);

setTimeout(function() {
    document.write('<p>hello world</p>');

}, 1000)