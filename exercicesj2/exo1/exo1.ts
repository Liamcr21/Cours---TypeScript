class Vehicule{
    public brand: string;
    private model: string;
    protected year: number;

        constructor(brand: string, model: string, year: number){
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
}

const vehicule = new Vehicule("Mercedes", "AMG", 2020);

console.log(vehicule);
