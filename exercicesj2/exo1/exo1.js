var Vehicule = /** @class */ (function () {
    function Vehicule(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    return Vehicule;
}());
var vehicule = new Vehicule("Mercedes", "AMG", 2020);
console.log(vehicule);
