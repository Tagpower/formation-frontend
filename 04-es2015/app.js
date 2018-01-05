//let
let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

//const
const citiesId = new Array("paris","nyc","rome","rio-de-janeiro")

console.log(citiesId)

//citiesId = [];

citiesId.push("tokyo")
console.log(citiesId)

//Création d'objet
function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return {city, temperature}
}

const weather = getWeather(favoriteCityId);

console.log(weather)

//Affectation destructurée
const {
    city : city,
    temperature : temperature
} = weather;

console.log(city)
console.log(temperature)

//Rest operator
let [parisId, nycId, ...otherCitiesId] = citiesId;

console.log(parisId)
console.log(nycId)
console.log(otherCitiesId.length)

//Classe
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name,
        this.imageUrl = imageUrl;
    }

    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
    }

    set price(prix) {
        this._price = prix;
    }

    get price() {
        return this._price;
    }

    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro","img/rio-de-janeiro.jpg" )
    }


}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg")

console.log(parisTrip)
console.log(parisTrip.name)
parisTrip.price = 100;
console.log(parisTrip.toString())
console.log(Trip.getDefaultTrip().toString())

//Héritage
class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl)
        this._price = 0;
    }

    toString() {
        return "Free" + super.toString();
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg")

console.log(freeTrip.toString())

//Promise, Set, Map, Arrow Function
class TripService {
    constructor() {
        this.setTrips = new Set();
        
        this.setTrips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.setTrips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.setTrips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));

    }

    
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let found = Array.from(this.setTrips).filter(t => t.name === tripName)[0];
                
                if(found) {
                    resolve(found);
                } else {
                    reject("No trip with name " + tripName);
                }
            }, 2000)
        })
    }

}

class PriceService {
    constructor() {
        this.priceMap = new Map();

        this.priceMap.set('paris', 100);
        this.priceMap.set('rio-de-janeiro', 800)
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //let found = Array.from(this.setTrips).filter(t => t.name === tripName)[0];
                let found = this.priceMap.get(tripId) ;
                
                if(found) {
                    resolve(found);
                } else {
                    reject("No price found for id " + tripId);
                }
            }, 2000)
        })
    }
}

let ts = new TripService();
let ps = new PriceService();

ts.findByName("Paris").then(function(found) { //Trouvé
    console.log("Trip found : " + found);
}, function(message) { //Pas trouvé
    console.log(message);
});

ts.findByName("Toulouse").then(function(found) { //Trouvé
    console.log("Trip found : " + found);
}, function(message) { //Pas trouvé
    console.log(message);
});


ps.findPriceByTripId("rio-de-janeiro").then(function(found) { //Trouvé
    console.log("Price found : " + found);
}, function(message) { //Pas trouvé
    console.log(message);
});

ps.findPriceByTripId("nantes").then(function(found) { //Trouvé
    console.log("Price found : " + found);
}, function(message) { //Pas trouvé
    console.log(message);
});