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

1. Renommage
2. Commentaire et identation
3. Extraction de code
4. Généricité

# DRY

- **D** : don’t
- **R** : repeat
- **Y** : yourself

# KISS

- **K** : keep
- **I** : it
- **S** : simple
- **S** : stupid

# Architecture

Avoir plusieurs couches

Exemple avec le MVC

- **M** : package Model (back)
- **V** : package View (front)
- **C** : package Controller (lien logique entre les 2)

# Spike

Devant un problème insoluble et que l'on étudie

- Etude documentaire
- Développement de prototype
- Etude comparative

# Cross-cuting concern

1. logs
2. data transfert
3. monitoring
4. authentificator / autorisation
5. caches
6. error / exception
7. securité
8. scalabilité

# Coverage

Les outils ralentissent l'application

- sonar : java
- jest : javascript

Un bon coverage ne prouve pas un bon code

# Mesures

## Cohésion

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

## Doublure de tests

Objet abstrait afin de permettre d'utiliser des méthodes avec une classe qui n'existe pas encore.

- stub
- fake
- mock

## Tests d'intégrations (tests métiers)

Tests automatisables après les **TU** (tests unitaires)

Vérifie les échanges entre les modules

- sur des modules avec des **TU**
- validation des interfaces des composants

## Tests de validations

arrive après les tests d'intégrations

- Validation fonctionnelle
- Validation solution
- Validation performance et robustesse

## Tests d'acceptations (tests qualification)

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

# TDD

- **T** : Test
- **D** : Driven
- **D** : Developpement

## Cycle du tdd :

- écrire le test
- compilation + exécution
- écrire le test au vert pour qu'il passe au vert
- vérifier qu'il est bien vert
- réfactoring

## Bénéfices :

- Facilite la création de code «propre».
- Améliore la qualité du code / réduit le nombre de bugs.
- Design émergent et robuste.
- Accélère le processus de développement.
- Harnais de tests automatisés dès le début

# BDD

principes du TDD avec les users stories

- **B** : Behaviour
- **D** : Driven
- **D** : Development

Les stories sont utilisées comme base pour développer les tests

bon comportement, et non pas du bon design

# ATDD

- **A** : Acceptance
- **T** : Test
- **D** : Driven
- **D** : Developement

Orienté sur l’adéquation entre les fonctionnalités et les critères d’acceptance

# Intégration continue

Principes et d’outils facilitant la phase d’intégration.

Vérifier que le résultat des modifications de code source ne produit pas de régression

- Version livrable et stable disponible en continu

Lancement des tests et builds à chaque modification ou ajout de code

Automatisation de tâches:

- compilation
- tests
- validation produit

L’équipe doit alors décider comment travailler efficacement sur ces sujets :

- stocker les versions successives des sources
- gérer les différences entre les sources et faciliter la gestion des sources
- gérer les différentes branches
- gérer les bug
- définir les bases de références
- garantir qu’une version peut être reconstruite...

# DevOps

3 axes :

- fluidité
- collecte et traitement de feedback
- diffusion culture, expérimentation et l'apprentissage continu

# regles

Même s'il y a plusieurs équipes

```txt
1 produit
|-> 1 PO
|-> 1 produit backlog
|-> 1 definition of done
```

Début des sprints des équipes et fin des équipes en même temps
