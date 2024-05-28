// Ertelenmiş , belli bir süre sonra çalışacak kod istiyorsak;
setTimeout( function () {
    console.log("setTimeout-2");
}, 3000); // 3000 => 3 saniye sonra

// Belirtilen sürede bir çalıştırmak için;
setInterval(function () {
   console.log("setInterval");
}, 1000) // 1000 => 1 saniyede bir console'a tekrar tekrar yazar. Biz durdurmadıkça sonsuza kadar gider.

//////////////////////////////////////////////////

function runCallbackFunc(callback) {
    callback();
}

runCallbackFunc(function () {
    console.log("Hello Tobeto!");
});