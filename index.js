// var slugify = require("slugify"); // commonjs versiyonu

import slu from "slugify"; // bu kütüphaneyi içine al ve onu slu ile ifade et

// Varsayılan metod olmadığı için istediğim ismi veremem. onun yerine {} içine metod isimlerini yazmam lazım 
import {sum,diff} from "./my-math.js";

//const str = "Hello tobeto!";
////const result = slugify(str); // hello-tobeto
//const result = slu(str, "="); // hello=tobeto
//console.log(result);

console.log(sum(4,5));
console.log(diff(5,4));