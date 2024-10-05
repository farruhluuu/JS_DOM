// let frm = document.forms[0];
// frm.user.onfocus = function(event) {
//     // console.log("получения фокуса");
//     // frm.user.classList.remove('error');
//     console.log("form: focus");     
// };

// frm.user.onblur = function(event) {
//     console.log("получения фокуса");
// }

// frm.user.onblur = function(event) {
//     if (frm.user.value.includes('#'))
//         frm.user.classList.add('error');
//     else frm.user.classList.remove('error');    
// }

// let frm = document.forms[0];
// frm.addEventListener("focusin", function() {
//     console.log("form: focusin");
// })

// frm.about.focus();

// frm.user.onfocus = function(event) {
//     frm.user.classList.remove('error');
// }


let active = document.activeElement;
console.log(active);

block.tabIndex = 1;
block.onfocus = function(event) {
    console.log("focus");
};

block.onblur = function(event) {
    console.log("blur");
};

