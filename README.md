# README.md

## Simulateur de Partie de Cartes en JavaScript

Ce projet simule une partie de cartes en utilisant la programmation orientée objet (POO) en JavaScript. L'objectif est de distribuer des cartes à des joueurs et d'afficher leurs mains dans la console.

### Classes

Le simulateur se compose des classes suivantes :

#### 1. Classe `Carte`
- **Attributs :**
  - `valeur` : Représente la valeur de la carte (ex: As, 2, 3, ..., 10, Valet, Dame, Roi).
  - `couleur` : Représente la couleur de la carte (ex: Coeur, Carreau, Trèfle, Pique).

- **Méthodes :**
  - `afficherCarte()` : Affiche la carte dans la console sous la forme "As de Pique".

#### 2. Classe `JeuDeCartes`
- **Attributs :**
  - `cartes` : Un tableau qui stocke toutes les cartes du jeu.

- **Méthodes :**
  - `creerJeu()` : Initialise un jeu complet de 52 cartes (toutes valeurs et couleurs confondues).
  - `melanger()` : Mélange le jeu de cartes en utilisant l'algorithme de Fisher-Yates.
  - `distribuer(X)` : Retourne les X premières cartes du jeu et les retire du paquet.

#### 3. Classe `Joueur`
- **Attributs :**
  - `nom` : Le nom du joueur.
  - `main` : Un tableau (Array) de cartes que possède le joueur.

- **Méthodes :**
  - `ajouterCarte(carte)` : Ajoute une carte à la main du joueur.
  - `afficherMain()` : Affiche la main du joueur dans la console.

#### 4. Classe `Partie`
- **Attributs :**
  - `jeu` : Une instance de `JeuDeCartes`.
  - `joueurs` : Un tableau de joueurs.

- **Méthodes :**
  - `distribuerCartes(X)` : Distribue X cartes à chaque joueur.
  - `afficherTout()` : Affiche les mains de tous les joueurs dans la console.

### Instructions

1. **Instanciation d'une partie :**
   - Créez une instance de la classe `Partie`.
   - Ajoutez 3 joueurs à la partie.
   - Distribuez 5 cartes à chaque joueur.
   - Affichez les mains des joueurs.

### Exemple d'Utilisation

```javascript
// Instancier une nouvelle partie
const partie = new Partie();

// Ajouter des joueurs
partie.joueurs.push(new Joueur("Alice"));
partie.joueurs.push(new Joueur("Bob"));
partie.joueurs.push(new Joueur("Charlie"));

// Distribuer 5 cartes à chaque joueur
partie.distribuerCartes(5);

// Afficher les mains des joueurs
partie.afficherTout();
```

### Prérequis

- Assurez-vous d'avoir un environnement JavaScript pour exécuter le code (navigateur ou Node.js).

### Remarques

Ce projet est une excellente opportunité pour pratiquer la POO en JavaScript et pour comprendre les concepts de gestion des collections d'objets. Vous pouvez également étendre le projet en ajoutant des règles de jeu ou en intégrant une interface utilisateur.

### License

Ce projet est sous la licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le distribuer.
