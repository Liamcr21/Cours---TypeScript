class Vehicule {
    public _brand: string;
    private _model: string;
    protected _year: number;

    constructor(brand: string, model: string, year: number) {
        this._brand = brand;
        this._model = model;
        this._year = year;
    }

    get brand(): string {
        return this._brand;
    }
    get model(): string {
        return this._model;
    }
    get year(): number {
        return this._year;
    }

    set brand(value: string) {
        {
            if (value) {
                this._brand = value;
            } else {
                throw new Error("La marque ne peut pas être vide.");
            }
        }
    }

    set model(value: string) {
        {
            if (value) {
                this._model = value;
            } else {
                throw new Error("Le modèle ne peut pas être vide.");
            }
        }
    }

    set year(value: number) {
        {
            if (value) {
                this._year = value;
            } else {
                throw new Error("L'année' ne peut pas être vide.");
            }
        }
    }

}



const vehicule = new Vehicule("Mercedes", "AMG", 2020);
vehicule.brand = "Porshe";
vehicule.model = "Cayenne";
vehicule.year = 2020;
for (const caractere in vehicule) {
  console.log(`${caractere}: ${vehicule[caractere]}`);
}
