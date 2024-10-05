// let frm = document.forms[0];

// frm.city.onChange = function() {
//     console.log(frm.city.selectedIndex);
// }

// frm.user.onChange = function() {
//     console.log(frm.user.value);
// }

// frm.gender[0].onChange = function() {
//     console.log("gender 0: "+frm.gender[0].checked);
// }
// frm.gender[1].onChange = function() {
//     console.log("gender 1: "+frm.gender[1].checked);
// }
// frm.agree.onChange = function() {
//     console.log("agree: "+frm.agree.checked);
// }


// let frm = document.forms[0];

// frm.user.oninput = function() {
//     console.log(frm.user.value);
// }

// let frm = document.forms[0];

// frm.user.oncut = function(event) {
//     console.log("cut");
//     event.preventDefault();
// }

// frm.user.oncopy = function(event) {
//     console.log("copy");
//     event.preventDefault();

// }
// frm.user.onpaste = function(event) {
//     console.log("paste");
//     event.preventDefault();

// }


// let frm = document.forms[0];

// frm.onsubmit = function(event) {
//     if(!frm.user.value) {
//         event.preventDefault();
//         console.log("после user пустой")
//     }
// }

// form.submit 



let frm = document.forms[0];

function sendForm() {
    let form = document.createElement("form");
    form.method = "GET";
    form.innerHTML = '<input name="q" value="test">';
    document.body.append(form);
    form.submit();
}









