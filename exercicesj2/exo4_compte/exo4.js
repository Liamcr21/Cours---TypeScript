var CompteBancaire = /** @class */ (function () {
    function CompteBancaire(nom, prenom, ncompte) {
        this._solde = 10;
        this._nom = nom;
        this._ncompte = ncompte;
        this._prenom = prenom;
    }
    CompteBancaire.prototype.deposer = function (montant) {
        this._solde += montant;
    };
    CompteBancaire.prototype.retirer = function (montant) {
        if (montant > this._solde) {
            throw new Error("Le solde est insuffisant pour effectuer cette opération.");
        }
        this._solde -= montant;
    };
    Object.defineProperty(CompteBancaire.prototype, "solde", {
        get: function () {
            return this._solde;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompteBancaire.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompteBancaire.prototype, "prenom", {
        get: function () {
            return this._prenom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompteBancaire.prototype, "ncompte", {
        get: function () {
            return this._ncompte;
        },
        enumerable: false,
        configurable: true
    });
    return CompteBancaire;
}());
var liamBank = new CompteBancaire("Liam", "Cariou", 1111);
var bogdanBank = new CompteBancaire("Bogdan", "Monote", 2222);
