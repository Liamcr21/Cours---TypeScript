class CompteBancaire {
    private _solde: number;
    private _nom : string;
    private _prenom : string;
    private _ncompte : number;
  
    constructor( nom: string, prenom: string, ncompte: number ) {
      this._solde = 10;
      this._nom = nom;
      this._ncompte = ncompte;
      this._prenom = prenom;
    }
  
    deposer(montant: number): void {
      this._solde += montant;
    }
  
    retirer(montant: number): void {
      if (montant > this._solde) {
        throw new Error("Le solde est insuffisant pour effectuer cette opération.");
      }
  
      this._solde -= montant;
    }
  
    get solde(): number {
        return this._solde;
    }

    get nom(): string {
        return this._nom;
    }

    get prenom(): string {
        return this._prenom;
    }

    get ncompte(): number {
      return this._ncompte;
  }
  }
  

  const liamBank = new CompteBancaire("Liam", "Cariou", 1111);
  const bogdanBank = new CompteBancaire("Bogdan" , "Monote", 2222);
