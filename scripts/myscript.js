// Promise (Nhập Passwork)
let pw = prompt("Xin hãy nhập Passwork để thấy thông tin CV");

if (pw === null) {
    console.log("sai") 
}

let correctpw = 1994;

let promise = new Promise(
    function (resolove, reject) {
        if (pw.valueOf() == correctpw) {
            resolove()
        }
        else {
            reject()
        }
    }
);
promise
    .then(function () {
        $(".about").show()
    })
    .catch(function () {
        $(".notifly").show()
        $(".about").hide()
    })