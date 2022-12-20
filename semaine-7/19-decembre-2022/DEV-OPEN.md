# Dette technique

Elle est inévitable.

C'est toutes les actions entrainant des couts supplémentaires dans le futur.

- On peut la réduire avec des bons choix techniques (definitions of done, intégration continue, tests...)

- Volontaire (fix bug rapide) / invonlontaire

- Va dans le product backlog (appartient au PO)

# SOLID

- **S** : Single responsibility principle
- **O** : Open/closed principle
- **L** : Liskov substitution principle
- **I** : Interface segregation principle
- **D** : Dependency inversion principle

# GRASP

Ce sont les design patterns

- **G** : General
- **R** : Responsibility
- **A** : Assignment
- **S** : Software
- **P** : Patterns / Principles

# Refactoring

- Renommage
- Commentaire et identation
- Extraction de code
- Généricité

# DRY

- **D** : don’t
- **R** : repeat
- **Y** : yourself

# KISS

- **K** : keep
- **I** : it
- **S** : simple
- **S** : stupid

# architecture

Avoir plusieurs couches

exemple : MVC

- **M** : package Model (back)
- **V** : package View (front)
- **C** : package Controller (lien logique entre les 2)

# spike

Devant un problème insoluble et que l'on étudie

- étude documentaire
- développement de prototype
- étude comparative

# cross-cuting concern

- logs
- data transfert
- monitoring
- authentificator / autorisation
- caches
- error / exception
- securité
- scalabilité

# Coverage

les outils ralentissent l'application

- sonar : java
- jest : javascript

un bon coverage ne prouve pas un bon code

# Mesures

## cohesion

Cohésion le plus fort possible

**1. Accidentel** : décrivant le niveau le plus faible où le lien entre les différentes méthodes est inexistant ou bien créé sur la base d'un critère futile.

**2. Logique** : lorsque les méthodes sont reliées logiquement par un ou plusieurs critères communs.

**3. Temporel** : lorsque les méthodes doivent être appelées au cours de la même période de temps.

**4. Procédural** : lorsque les méthodes doivent être appelées dans un ordre spécifique.

**5. Communicationnel** : lorsque les méthodes manipulent le même ensemble spécifique de données.

**6. Séquentiel** : lorsque les méthodes qui manipulent le même ensemble de données doivent être appelées dans un ordre spécifique.

**7. Fonctionnel** : réalise le niveau le plus élevé lorsque la classe ou le module est dédié à une seule et unique tâche bien spécifique.

## Couplage

Avoir le moins d'informations entre plusieurs classes

**1. Sans couplage** : les composants n'échangent pas d'information.

**2. Par données** : les composants échangent de l'information par des méthodes utilisant des arguments (paramètres) de type simple (nombre, chaîne de caractères, tableau).

**3. Par paquet** : les composants échangent de l'information par des méthodes utilisant des arguments de type composé (structure, classe).

**4. Par contrôle** : les composants se passent ou modifient leur contrôle par changement d'un drapeau (verrou).

**5. Externe** : les composants échangent de l'information par un moyen de communication externe (fichier, pipeline, lien de communication).

**6. Commun (global)** : les composants échangent de l'information via un ensemble de données (variables) commun.

**7. Par contenu (interne)** : les composants échangent de l'information en lisant et écrivant directement dans leurs espaces de données (variables) respectifs.

# Tests

![pyramide des tests](./pyramide-test.png)

## Tests fonctionnels

vérifie la conformité des spécifications

## Tests structurel

ce que le programme est cabpable de faire

- branche
- décisions
- valeurs

## Tests unitaire

Ce sont des tests automatisable. Ils sont :

- indépendant
- un seul concept logique
- rapide
- cours

Ils permettent d'avoir :

- retour instantanné
- robustesse
- non-régression

## doublure de tests

Objet abstrait afin de permettre d'utiliser des méthodes avec une classe qui n'existe pas encore.

- stub
- fake
- mock

## tests d'intégrations (tests métiers)

Tests automatisables après les **TU** (tests unitaires)

Vérifie les échanges entre les modules

- sur des modules avec des **TU**
- validation des interfaces des composants

## tests de validations

arrive après les tests d'intégrations

- Validation fonctionnelle
- Validation solution
- Validation performance et robustesse

## tests d'acceptations (tests qualification)

vérifier si conforme aux besoins de l'utilisateurs

arrive tous les sprints

couplé avec les tests systèmes (fournisseur)

## Autres tests

smoke tests (sanity tests)

- tests rapide des fonctions et performance majeurs

tests de stress

- bande passante, réseau, mémoire, disque...

tests exploratoires

- docs insuffisante, on test à la main
