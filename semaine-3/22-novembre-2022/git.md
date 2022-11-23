# Git (outil de versionning)

https://learngitbranching.js.org/?locale=fr_FR

## Travail en equipe

travail en parallele
décentralisé (plusieurs personnes peuvent acceder à une même partie du logiciel)

## Configuration

https://git-scm.com/download/win

git config --global user.name "Robin Hotton"
git config --global user.email "Robin.hotton@hotmail.com"
git config --global core.autocrlf true
git config --global core.editor "code --wait"

git init (dans le dossier voulu)
|->.git (configuration de git)

## Commande git

### Life cycle

_untracked_ (creation du fichier)
_staged_ (pret a etre deposé sur github)
_unmodified_ (fichier commité)
_modified_ (fichier pas pret a etre commit)

Repository (mkdir: dossier)
|
|-> touch <filename> (créer un fichier)
|-> git status (voir toutes les modifications apporté)
|-> git add <fichier>
|-> git commit -m "titre" -m "description"

### Conventional commit

https://www.conventionalcommits.org/en/v1.0.0/

<type>[optional scope]: <description>
[optional body]
[optional footer(s)]

### Modifier le nom du dernier commit

git commit --amend
git commit --amend -m "mon nouveau titre"

### ajouter un fichier au commit precedent

git add <fichier>
git commit --amend <fichier>

### mauvaise pratique

git add . (commit tous les fichiers) /!\ à ne pas faire
pour palier a ça : git rm --cached <fichier> (ne suis plus le fichier / .gitignore)

### log

git log (historique des commit)
git show <hash> (exemple : 319f7cab...) (nom du commit et les fichiers modifié)
git diff <hash1> <hash2> (diff des deux commit)
git diff <hash1>^ (diff du commit avec son parent)
git diff <hash1>^^ (diff du commit avec son grand-parent)
git diff <hash1>~3 (diff du commit avec son arriere grand-parent)

### branch

git branch <nom-branche> (cree une branche)
git checkout <nom-branche> (se deplace sur la branche)
git checkout -b <nom-branche> (cree et deplace sur la branche)

git checkout master
git branch -d <nom-branche> (supprime une branche)

git merge <nom-branche> (ramene les modifications de la branche vers la main)
(ramène aussi tous les commits sur la branche main)
head (branch temporaire) -> toutes les modif du projet jusqu'au prochain commit

**/!\ ATTENTION /!\\**
**git reset --hard <hash> (reset au commit hash et supprime tous les commits suivants)**
**/!\ ATTENTION /!\\**
git reset <hash> (retourne au commit hash et _untracked_ tous les modifs des commits suivants)

### tag

Un tag est relié a un commit
Il sert de porte d'entré pour recupéré le commit facilement sans utiliser de reset

#### versions

A.B.C
A = version majeur
B = version mineur
c = patch

#### creation

git tag (permet de voir tous les tag)

git tag 0.5.0 (le dernier commit recoit le tag)

git tag -d 0.5.0 (delete le tag 0.5.0)
git tag 0.5.0 <hash>

### reflog

permet de voir les commits suppr
git reset --hard <id> (fait revenir le commit suppr dans le projet)

### stash

git stash (met en mémoire les modif, mais pas en commit)
git stash list (voir toutes les stash)

#### acceder

git stash pop (recupère le dernier stash)
git stash drop <id> (ex : git stash apply 0)
git stash apply <id>

#### modification

git checkout tags/0.5.0 (travaille sur un head temporaire. si le code n'est pas enregistré, il est perdu)
git checkout tags/0.5.0 -b 0.5.0 (travaille sur une nouvelle branche, modification enregistré)

### revert

git revert <hash> (soft reset qui s'arrete au premier conflit)
git revert --continue <hash> (ne s'arrete avec les conflits)

### .gitignore

dossier a la racine pour ignorer des fichiers de config
git rm --cached <fichier> (pour enlevé un fichier dejà commit)

### rebase

rebase garde que le dernier commit et ne garde pas l'historique de commit de la branche (contrairement au merge)

## gitflow

[Alt text](./workflow.png)
[Alt text](./workflow2.png)
TDD : Test-Driven Development

### flow init

git flow init (git init mais avec les commandes git-flow)
[Alt text](./git-flow-init.png)

### flow feature

git flow feature start authentificate (creer la branche feature/authentificate et se déplace dedans)
git flow feature finish (merge la branch et le detruit)

### flow release

git flow release start 1.0.0 (creer une branche release)
git flow release finish (merge la branche sur master et develop puis detruit la branche)

## alias

git config --global alias.c "commit -m" (git commit -m "text" -> git c "text")
git config --global alias.a add
git config --global alias.b "checkout -b"

git rebase

## commande terminal

ls (voir tous les dossier fils)

pwd (avoir le dossier courant)

mkdir (creation d'un dossier)

. (current directory)

~ (user directory)

ls -force (voir les fichiers caché)

code . (lance vscode avec le dossier courant comme root)

## vi

i (passer en insertion)
"Echap" (quitter le mode insertion)
:q (quitter sans sauvegarder)
:wq (quitter en sauvegardant)
