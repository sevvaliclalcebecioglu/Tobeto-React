// Parametre almayan functionlar;

function first() {
    console.log("first");
}

function second() {
    console.log("second");
}

function third() {
    console.log("third");
}

// Böyle bakınca hepsi sırayla çalışıyor gibi oluyor.

first();

// mesela burda settimeout metoduyla bakacak olursak;

setTimeout(second, 1000); // Önce first-third 1 saniye sonra da second çalıştı.

third();

// Yani javascriptte metodlar çalışmak için diğer metodun bitmesini beklemezler . Önce hangisi biterse onu ekrana yazar.

//////////////////////////////////////////////////////////////

// Ama sırayla yapmasını istiyorsam da şu şekilde yapmam gerekir;

first();

setTimeout(() => {
    second();
    third();
}, 1000);

// Yani bunun bitiminde bunu çalıştır diye belirtmiş oldum. Ama bu da tam çözüm sayılmaz.