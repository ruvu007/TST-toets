function Schoenen(merk, maat) {

    this.getMerk = function () {
        return merk;
    }

    this.getMaat = function () {
        return maat;
    }

    this.showDetails = function () {
        console.log(`Schoenen: ${merk} maat: ${maat}.`);
    }

}

function Voorraad(item, aantal) {
    let artikel = item;
    let voorraad = aantal;

    this.getVoorraad = function () {
        return voorraad;
    }
    this.getArtikel = function () {
        return artikel;
    }
    this.showVoorraad = function () {
        console.log(`De voorraad van: ${artikel} is ${voorraad}.`);
    }
    this.verlaagVoorraad = function () {
        voorraad = voorraad - 1;
    }

    this.verhoogVoorraad = function () {
        voorraad = voorraad + 1;
    }

    this.verhoogMeerdereVoorraad = function () {
        voorraad = voorraad + 5;
    }

    this.verlaagMeerdereVoorraad = function () {
        voorraad = voorraad - 5;
    }
}

document.getElementById('verstuurKnop').addEventListener('click', () => {
    let merk = document.getElementById('schoenenMerk').value;
    let maat = document.getElementById('schoenenMaat').value;

    nieuweSchoenen
})