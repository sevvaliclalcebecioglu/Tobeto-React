// var slugify = require("slugify"); // commonjs versiyonu

 // bu kütüphaneyi içine al ve onu slu ile ifade et
 import slu from "slugify";

// Varsayılan metod olmadığı için istediğim ismi veremem. onun yerine {} içine metod isimlerini yazmam lazım 
import mymath,{sum,diff,str,num,obj,ary} from "./my-math.js";
// mymath default olan metodumu işaret ederken diğerleri normal export ettiğim metodlardır.

//const str = "Hello tobeto!";
////const result = slugify(str); // hello-tobeto
//const result = slu(str, "="); // hello=tobeto
//console.log(result);

mymath(`SUM : ${sum(4,5)}`);
mymath(`DIFF : ${diff(5,2)}`);

console.log(str);

console.log(num);

console.log(obj);

console.log(ary);