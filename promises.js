function first() {
    return "first";
}

function second() {
    return "second";
}

function third() {
    return "third";
}

// Benim promises yapılara ihtiyacım var.

// Resolve => ne zaman ki bunu çağırırsın ben o zaman fonksiyonun bittiğini anlarım. Kod resolve metodunu çağırana kadar devam eder.

// Resolve içinde de geriye döndürmek istediğim metodu döndürebilirim.

// Reject => Burda bir hata oluştu devamını getirme. Bir sonrakileri çalıştırma reject olarak döndür.

// Hata varsa reject ile hata yoksa resolve ile döneriz.

/* let promises1 = new Promise(function first(resolve,reject) {
    const result = first();
    resolve(result);
});

let promises2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const result = second();
        resolve(result);
    }, 1000);   
}) 

let promises3 = new Promise(function third(resolve,reject) {
    const result = third();
    resolve(result);
}); */

// Önce promises1 çalışır. Resolve ile ben bittim diyerek geri döner. Sonra promises2 1 saniye sonra çalışır. Resolve ile bittiğini belli eder. En sonda promises3 çalışır. Ve resolve ile biter. Bu şekilde javascript kodlarımı sırasıyla çalıştırmış oldum.

// Ama bunları da async method içine koymam lazım;

async function f() {
    let promises1 = new Promise(function (resolve,reject) {
        const result = first();
        resolve(result);
    });
    
    let promises2 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            const result = second();
            resolve(result);
        }, 2000);   
    });
    
    let promises3 = new Promise(function (resolve,reject) {
        const result = third();
        resolve(result);
    });    

   //1.yazım şekli
   //
   // console.log(await promises1);
   // console.log(await promises2);
   // console.log(await promises3);

   //2.yazım şekli
   //
   // promises bittiğinde şu fonksiyonu çalıştır;
  /* promises1.then((val) => {
        console.log(val);
        
        promises2.then((val2) => {
            console.log(val2);

            promises3.then((val3) => console.log(val3));
        });

   }); */

   //3.yazım şekli
   //
   /* promises1.then((val) => {
    console.log(val);
    return promises2;
   }).then((val2) => {
    console.log(val2);
    return promises3;
   }).then((val3) => console.log(val3)); */


   //4.yazım şekli
   //
   //promiseAll() => verdiklerimizi sırasıyla çalıştırır.
   Promise.all([promises1, promises2, promises3])
        .then((result) => {
            result.map((item) => console.log(item));
        });

}

f();

// await ile çağırabilmek için async method içinde olmam lazım.

// Kısacası sırasıyla çalıştırmak için ; promise yapılar - resolve dönmek - async içinde kullanmak - await ile geri dönmek 