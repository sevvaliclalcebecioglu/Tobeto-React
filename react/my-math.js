// Tek satırlıksa ;
// Hepsini dışarıya çıkarmak için export'u başına eklerim. O zaman defaul function olmaz
export const sum = (a,b) => a + b;
export const diff = (a,b) => a - b;

// Başlarına export yazmak yerine ;
// export {sum , diff} = şeklinde de kullanabilirm 

//const sum = function (a, b) {
  //  return a + b;
//}  ya da bu şekilde de yazarım 

//function sum (a,b){} şeklinde de yazabiliriz . yukardaki gibide yazabiliriz.

// const sum = (a,b) => {} ya da bu şekilde de oluşturabilirm 

//export default sum; // fonksiyonu dışarıya export ettim

// Default = Bu modelin varsayılan fonksiyonu sum fonksiyonudur demektir.