// document.addEventListener("DOMContentLoaded", ready);

// function ready(event) {
//     console.log("DOMContentLoaded")
//     console.log(`Изображения: ${image.offsetWidth}x${image.offsetHeight}`)
// }

// console.log("вызов метода write");
// document.write('<p>Добавить тег р на страницу</p>')


// console.log(getComputedStyle(document.body).marginTop) 



// window.onload = function(event) {
//     console.log("load");
//     console.log(`Изобрадение: ${image.offsetWidth}x${image.offsetHeight}`);
// }

// window.addEventListener("unload", function() {
//     console.loog("отправить данных на сервер");
// });

// window.onbeforeprint = function() {
//     return false;
// }



// removeImage();
// function removeImage() {
//     if(document.readyState == "loading") {
//         console.log("документ грузиться, вешаем обработчик");
//         document.addEventListener("DOMContentLoaded",removeImage)
//     }
//     else {
//         console.log("удалить изображения");
//         document.body.remove(image)
//     }
// }




// document.addEventListener("readystatechange", function() {
//     console.log(document.readyState);
// })