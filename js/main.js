const km = parseFloat(prompt(`Quanti chilometri devi percorrere?`));
const age = parseInt(prompt(`Quanti anni hai?`))

if (isNaN(km) || isNaN(age) || !km || !age){
    console.log(`Inserisci dei numeri validi per favore, e ricarica!`);
} else{
    const pricePerKm = 0.21;
    let priceTrip = km * pricePerKm;
    let discount = 0;
    
    if (age < 18){
        discount = 0.2;
    } else if (age > 65){
        discount = 0.4;
    }

    priceTrip *= (1 - discount);
    const priceInEuro = `€${priceTrip.toFixed(2).replace("." , ",")}`;

    if (discount > 0){
        console.log(`Il tuo viaggio per ${km} km costerà ${priceInEuro} con uno sconto applicato del ${discount * 100}%!`)
    } else {
        console.log(`Il tuo viaggio per ${km} costerà ${priceInEuro}!`)
    }
}