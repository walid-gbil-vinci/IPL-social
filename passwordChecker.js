function passwordChecker(password) {
    // Convertir en chaîne et nettoyer
    password = String(password).normalize('NFC').trim();

    // Vérifications
    if (password.length < 8) return false; // Vérifie la longueur
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false; // Vérifie les caractères spéciaux
    if (!/\d/.test(password)) return false; // Vérifie les chiffres
    if (/IPL/i.test(password)) return false; // Vérifie la présence de "IPL" (insensible à la casse)

    return true; // Tout est valide
}

module.exports = passwordChecker;
