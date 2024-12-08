const kmTrip = prompt("Quanti chilometri devi percorrere?")
const agePassenger = prompt("Quanti anni hai?")

if ((isNaN(kmTrip) || isNaN(agePassenger)) || (kmTrip==="" || agePassenger==="")){
    console.log("Inserisci dei numeri validi per favore, ricarica")
} else if (agePassenger < 18){
    const priceTrip = kmTrip * 0.21
    const priceForMinor = priceTrip - ((priceTrip * 20) / 100);
    const priceInEuro = `€${priceForMinor.toFixed(2).replace("." , ",")}`;
    console.log(`Il tuo viaggio per ${kmTrip} km costerà ${priceInEuro} con uno sconto applicato del 20%`);
} else if (agePassenger > 65){
    const priceTrip = kmTrip * 0.21
    const priceForMajor = priceTrip - ((priceTrip * 40) / 100);
    const priceInEuro = `€${priceForMajor.toFixed(2).replace("." , ",")}`;
    console.log(`Il tuo viaggio per ${kmTrip} km costerà ${priceInEuro} con uno sconto applicato del 40%`);
} else {
    const priceTrip = kmTrip * 0.21
    const priceInEuro = `€${priceTrip.toFixed(2).replace("." , ",")}`;
    console.log(` Il tuo viaggio per ${kmTrip} km costerà ${priceInEuro}`)
}