// array functions

const arr = ["Apple", "Banana", "Banana"];

// Push => Diziye eleman eklemek

arr.push("Orange");
console.log(arr);

// Map => Dizi içerisinde dönmeyi sağlar.

arr.map((item) => console.log(item));

// Find => Dizi içerisinde aradığımız bir metodu bulmamızı sağlar.

const result = arr.find((item) => item === "Banana");
console.log(result);
// "Banana" varsa banana döner yoksa undefined döner.

// Filter => Find ile aynı işlemi yapar ama bulduğu tüm sonuçları döner.

const results = arr.filter((item) => item === "Banana" || item === "Orange");
console.log(results);

// Some => Dizideki elemanların hepsinin değeri şu mu diye kontrol etmeye yarar.

const result2 = arr.some((item) => item === "Banana");
console.log(result2);
// Varsa true , yoksa false döner.

// Every => Bütün elemanların değeri şu mu ?

const result3 = arr.every((item) => item === "Banana");
console.log(result3);
// Dizideki elemanların hepsi banana mı diye sorduğum için false döner

// İncludes => Some ile aynı işi yapar. Tek farkı fonksiyon yazmayıp direk var mı diye sormak istediğim şeyi yazıyorum.

const result4 = arr.includes("Banana");
console.log(result4);