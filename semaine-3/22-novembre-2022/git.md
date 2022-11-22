# Git (outil de versionning)

## Versionning

historique

## travail en equipe

travail en parallele
décentralisé (plusieurs personnes peuvent acceder à une même partie du logiciel)

## configuration

https://git-scm.com/download/win

git config --global user.name "Robin Hotton"
git config --global user.email "Robin.hotton@hotmail.com"
git config --global core.autocrlf true
git config --global core.editor "code --wait"

git init (dans le dossier voulu)
|->.git (configuration de git)

## commande git

### life cycle

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
|->

### conventional commit

https://www.conventionalcommits.org/en/v1.0.0/

<type>[optional scope]: <description>
[optional body]
[optional footer(s)]

### modifier le nom du dernier commit

git commit --amend
git commit --amend -m "mon nouveau titre"

### ajouter un fichier au commit precedent

git add <fichier>
git commit --amend <fichier>

### mauvaise pratique

git add . (commit tous les fichiers) /!\ à ne pas faire
git rm --cached <fichier> (ne suis plus le fichier / .gitignore)

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

git merge / git rebase

git tag

git conflit

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

# Github (plateforme qui utilise Git)
