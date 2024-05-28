// Tek satırlıksa ;
// Hepsini dışarıya çıkarmak için export'u başına eklerim. O zaman defaul function olmaz
export const sum = (a,b) => a + b;
export const diff = (a,b) => a - b;
const write = (msg) => console.log(msg);

// Başka değişken türlerinide dışarıya aktarabiliyoruz

// Mesela string var. Tabiki dışarı aktarmak için başına export ekleriz
export const str = "Hello Tobeto!";

// Number;
export const num = 21;

// Obje;
export const obj = {
  category: 'abc',
  order: 30
};

// Array;
export const ary = ["Apple","Orange","Banana"];

export default write; // diğerleri dışarıya normal çıkarken bunu default olarakda çıkarabilirm 

// Başlarına export yazmak yerine ;
// export {sum , diff} = şeklinde de kullanabilirm 

//const sum = function (a, b) {
  //  return a + b;
//}  ya da bu şekilde de yazarım 

//function sum (a,b){} şeklinde de yazabiliriz . yukardaki gibide yazabiliriz.

// const sum = (a,b) => {} ya da bu şekilde de oluşturabilirm 

//export default sum; // fonksiyonu dışarıya export ettim

// Default = Bu modelin varsayılan fonksiyonu sum fonksiyonudur demektir.