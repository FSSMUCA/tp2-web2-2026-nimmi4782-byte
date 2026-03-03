let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;               
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;
let sousTotal = prix * quantite;
let reduction = (codePromo !== null && estMembre) ? sousTotal * (reductionPourcentage / 100) : 0;
let total = sousTotal - reduction;
let paiementAccepte = soldeCompte >= total;
let nouveauSolde = paiementAccepte ? soldeCompte - total : soldeCompte;
console.log("1. Sous-total :", sousTotal, "MAD");
console.log("2. Montant réduction :", reduction, "MAD");
console.log("3. Total final :", total, "MAD");
console.log("4. Statut :", paiementAccepte ? "Paiement accepté" : "Solde insuffisant");
if (paiementAccepte) {
    console.log("5. Nouveau solde :", nouveauSolde, "MAD");
}
console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit     : " + nomProduit);
console.log("Quantité    : " + quantite);
console.log("Prix unit.  : " + prix + " MAD");
console.log("Sous-total  : " + sousTotal.toFixed(2) + " MAD");
console.log("Réduction   : " + reduction.toFixed(3) + " MAS");
console.log("Total       : " + total.toFixed(3) + " MAS");
console.log("Statut      : " + (paiementAccepte ? "Paiement accepté" : "Paiement refusé"));
console.log("Solde       : " + nouveauSolde.toFixed(3) + " MAD");
console.log("=========================");