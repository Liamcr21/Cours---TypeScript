var Vehicule = /** @class */ (function () {
    function Vehicule(brand, model, year) {
        this._brand = brand;
        this._model = model;
        this._year = year;
    }
    Object.defineProperty(Vehicule.prototype, "brand", {
        get: function () {
            return this._brand;
        },
        set: function (value) {
            {
                if (value) {
                    this._brand = value;
                }
                else {
                    throw new Error("La marque ne peut pas être vide.");
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            {
                if (value) {
                    this._model = value;
                }
                else {
                    throw new Error("Le modèle ne peut pas être vide.");
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            {
                if (value) {
                    this._year = value;
                }
                else {
                    throw new Error("L'année' ne peut pas être vide.");
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    return Vehicule;
}());
var vehicule = new Vehicule("Mercedes", "AMG", 2020);
vehicule.brand = "Porshe";
vehicule.model = "Cayenne";
vehicule.year = 2020;
for (var caractere in vehicule) {
    console.log("".concat(caractere, ": ").concat(vehicule[caractere]));
}
