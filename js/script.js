let kilometer = parseInt(prompt("Quanti km devi fare?"));
console.log(kilometer); 

let age = parseInt(prompt("quanti anni hai?"));
console.log(age);

const price = 0.21;

let total = kilometer * price;
console.log(total);


const giovani = ((total * 20) / 100);
console.log(giovani);

 const anziani = ((total * 40) / 100);

if (age < 18){

    total = (total - giovani);
    console.log("meno");

} else if  (age > 65){

    total = (total - anziani);
    console.log("piu");


} else {

    total = (total);
    console.log("norm");
}

 let biglietto = document.getElementById("prezzoBiglietto").innerHTML += "Prezzo biglietto :" + " " + total + " " + "€";
 


