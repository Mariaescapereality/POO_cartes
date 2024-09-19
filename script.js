class Carte {
    constructor(valeur, couleur) {
        this.valeur = valeur;
        this.couleur = couleur;
    }

    afficherCarte() {
        console.log(`Afficher carte: ${this.valeur} de ${this.couleur}`);
    }
}

class JeuDeCartes {
    constructor() {
        this.cartes = [];
        this.creerJeu();
    }

    creerJeu() {
        const valeurs = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi'];
        const couleurs = ['Coeur', 'Carreau', 'Trèfle', 'Pique'];

        for (let couleur of couleurs) {
            for (let valeur of valeurs) {
                this.cartes.push(new Carte(valeur, couleur));
            }
        }
    }

    melanger() {
        for (let i = this.cartes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cartes[i], this.cartes[j]] = [this.cartes[j], this.cartes[i]];//swap elements
        }
        //this.cartes.sort( () => Math.random() - 0.5);//pas tres optimale, si il y a beaucoup de data
    }

    distribuer(X) {
        return this.cartes.splice(0, X);
    }
}

class Joueur {
    constructor(nom) {
        this.nom = nom;
        this.main = [];
    }

    ajouterCarte(carte) {
        this.main.push(carte);
    }

    afficherMain() {
        console.log(`Main de ${this.nom}:`);
        this.main.forEach(carte => carte.afficherCarte());
    }
}

class Partie {
    constructor(nomsJoueurs) {
        this.jeuDeCartes = new JeuDeCartes();
        this.jeuDeCartes.melanger();
        this.joueurs = nomsJoueurs.map(nom => new Joueur(nom));
    }

    distribuerCartes(X) { //X - nombreDeCarteParJoueur
        for (let joueur of this.joueurs) {
            const cartes = this.jeuDeCartes.distribuer(X);
            cartes.forEach(carte => joueur.ajouterCarte(carte));
        }
    }

    afficherTout() {
        this.joueurs.forEach(joueur => joueur.afficherMain());
    }
}

// Instantiation de la partie
const nomsJoueurs = ['Alice', 'Bob', 'Charlie'];
const partie = new Partie(nomsJoueurs);

// Distribution de 5 cartes à chaque joueur
partie.distribuerCartes(5);

// Affichage des mains de tous les joueurs
partie.afficherTout();

