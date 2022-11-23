# Entrainement

[LearnGitBranching](https://learngitbranching.js.org/?locale=fr_FR)

# Travail en equipe

Travail en parallèle
Décentralisé (plusieurs personnes peuvent acceder à une même partie du logiciel)

# Configuration

[git download](https://git-scm.com/download/win)

git config --global user.name "Robin Hotton"
git config --global user.email "Robin.hotton@hotmail.com"
git config --global core.autocrlf true
git config --global core.editor "code --wait"

git init (dans le dossier voulu)
|->.git (configuration de git)

# Commande git

## Life cycle

_untracked_ (creation du fichier)
_staged_ (pret a etre deposé sur github)
_unmodified_ (fichier commité)
_modified_ (fichier pas pret a etre commit)

Repository (mkdir: dossier)
|
|-> touch `filename` (créer un fichier)
|-> git status (voir toutes les modifications apporté)
|-> git add `fichier`
|-> git commit -m "titre" -m "description"

## Mauvaise pratique

git add . (commit tous les fichiers) /!\ à ne pas faire
pour palier a ça : git rm --cached `fichier` (ne suis plus le fichier / .gitignore)

## Conventional commit

https://www.conventionalcommits.org/en/v1.0.0/

`Type`[optional scope]: `Description`
[optional body]
[optional footer(s)]

git commit -m "docs(auth): ajout de la doc sur authentification"

### Modifier commit

git commit --amend
git commit --amend -m "mon nouveau titre"

### Acces commit precedent

git add `fichier`
git commit --amend `fichier`

## Log

git log (historique des commit)
git show `hash` (exemple : 319f7cab...) (nom du commit et les fichiers modifié)
git diff `hash1` `hash2` (diff des deux commit)
git diff `hash`^ (diff du commit avec son parent)
git diff `hash`^^ (diff du commit avec son grand-parent)
git diff `hash`~3 (diff du commit avec son arriere grand-parent)

## Branch

### Local branch

git branch `nom-branche` (cree une branche)
git checkout `nom-branche` (se deplace sur la branche)
git checkout -b `nom-branche` (cree et deplace sur la branche)

### Distant branch

git branch -a (permet de voir toutes les branches)
git checkout -a `branch`

## Checkout

git checkout master
git branch -d `nom-branche` (supprime une branche)
git branch -M "nouveau nom de la branche"

## Merge

git merge `nom-branche` (ramene les modifications de la branche vers la main)
(ramène aussi tous les commits sur la branche main)
head (branch temporaire) -> toutes les modif du projet jusqu'au prochain commit

## Reset

**/!\ ATTENTION /!\\**
**git reset --hard `hash` (reset au commit hash et supprime tous les commits suivants)**
**/!\ ATTENTION /!\\**
git reset `hash` (retourne au commit hash et _untracked_ tous les modifs des commits suivants)

## Tag

Un tag est relié a un commit
Il sert de porte d'entré pour recupéré le commit facilement sans utiliser de reset

### Version

A.B.C
A = version majeur
B = version mineur
c = patch

### Creation

git tag (permet de voir tous les tag)

git tag 0.5.0 (le dernier commit recoit le tag)

git tag -d 0.5.0 (delete le tag 0.5.0)
git tag 0.5.0 `hash`

## Reflog

permet de voir les commits suppr
git reset --hard `id` (fait revenir le commit suppr dans le projet)

## Stash

git stash (met en mémoire les modif, mais pas en commit)
git stash list (voir toutes les stash)

### Acceder

git stash pop (recupère le premier stash et le supprime)
git stash drop `id`
git stash apply `id`

### Modifier

git checkout tags/0.5.0 (travaille sur un head temporaire. si le code n'est pas enregistré, il est perdu)
git checkout tags/0.5.0 -b 0.5.0 (travaille sur une nouvelle branche, modification enregistré)

## Revert

git revert `hash` (soft reset qui s'arrete au premier conflit)
git revert --continue `hash` (ne s'arrete avec les conflits)

## .gitignore

dossier a la racine pour ignorer des fichiers de config
git rm --cached `file` (pour enlevé un fichier dejà commit)

## Rebase

rebase garde que le dernier commit et ne garde pas l'historique de commit de la branche (contrairement au merge)

## Remote

git remote add origin `https:...`
git remote get-url origin
git remote set-url origin toto
git remote (renvoi le nom des remotes presents)
git remote remove origin
git push -u origin main

# Gitflow

[worklow shema](./workflow.png)
[worklow shema 2](./workflow2.png)
TDD : Test-Driven Development

## Flow init

git flow init (git init mais avec les commandes git-flow)
[git flow init](./git-flow-init.png)

## Flow feature

git flow feature start authentificate (creer la branche feature/authentificate et se déplace dedans)
git flow feature finish (merge la branch et le detruit)

## Flow release

git flow release start 1.0.0 (creer une branche release)
git flow release finish (merge la branche sur master et develop puis detruit la branche)

# Alias

git config --global alias.c "commit -m" (git commit -m "text" -> git c "text")
git config --global alias.a add
git config --global alias.b "checkout -b"

git rebase

# Cmd terminal

ls (voir tous les dossier fils)

pwd (avoir le dossier courant)

mkdir (creation d'un dossier)

. (current directory)

~ (user directory)

ls -force (voir les fichiers caché)

code . (lance vscode avec le dossier courant comme root)

# Vi

i (passer en insertion)
"Echap" (quitter le mode insertion)
:q (quitter sans sauvegarder)
:wq (quitter en sauvegardant)
