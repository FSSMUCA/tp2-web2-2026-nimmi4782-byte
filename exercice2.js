let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
for (let i = 0; i < valeurs.length; i++) {
    let valeur = valeurs[i]; 
    let valeurString = String(valeur);
    let etat = valeur ? "truthy" : "falsy";
    console.log(valeurString + " -> " + etat);
}