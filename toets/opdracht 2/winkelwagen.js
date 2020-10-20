let winkelwagen = [];
let schoenen = [
    ["Nike"] = [kleur = "zwart", maat = "40", voorraad = 5],
    ["Adidas"] = [kleur = "wit", maat = "44", voorraad = 10],
    ["Moncler"] = [kleur = "groen", maat = "45", voorraad = 2],
    ["Dior"] = [kleur = "zwart", maat = "42", voorraad = 6],
];

function voegProduct(item) {
    if (schoenen.includes(item)) {
        winkelwagen.push(schoenen[item]);
    }   
}

function getAantalWinkelmand() {
    console.log(winkelwagen.length);
    return winkelwagen.length
}

function getVoorraad(item) {
    if (schoenen.includes(item)) {
        return schoenen[item].voorraad;
    }   
}

function getKleurMaat(item) {
    if (schoenen.includes(item)) {
        console.log(schoenen[item].kleur);
        console.log(schoenen[item].maat);
    }
}
