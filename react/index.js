// var slugify = require("slugify"); // commonjs versiyonu

import slu from "slugify"; // bu kütüphaneyi içine al ve onu slu ile ifade et

// Varsayılan metod olmadığı için istediğim ismi veremem. onun yerine {} içine metod isimlerini yazmam lazım 
import mymath,{sum,diff} from "./my-math.js";
// mymath default olan metodumu işaret ederken diğerleri normal export ettiğim metodlardır.

//const str = "Hello tobeto!";
////const result = slugify(str); // hello-tobeto
//const result = slu(str, "="); // hello=tobeto
//console.log(result);

console.log(mymath(`SUM : ${sum(4,5)}`));
console.log(mymath(`DIFF : ${diff(5,2)}`));