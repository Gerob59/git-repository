# protocole

**H**yper
**T**ext
**T**ransfert
**P**rotocol
(Secure)

Protocole : convention a respecter pour permettre la communication
Permet la communication entre le navigateur et un serveur web

## HTTP :

couche application
port 80

## HTTPS :

couche transport
port 443
(utilisation de clé SSL)

## methode

get
post
put
delete
head

## HTML

**H**yper
**T**ext
**M**arkup
**L**anguages

ce n'est que du texte
ce n'est pas un langage de programmation
langage balisé

# Images

## JPEG

**J**oint
**P**hotographic
**E**xpert
**G**roup
pour le photos
altère un peu la photo

## PNG

**P**ortable
**N**etwork
**G**raphics
pour les images
n'altère pas l'image
8 ou 24 bits

## GIF

**G**raphics
**I**nterchange
**F**ormat
image animé

# HTML

<!DOCTYPE html>
<html lang="fr">

remplir le header

refermer ses balises

attribut en minuscule

on ne croise pas les balises

# CSS

div h2 { <!--style --> } <!--tous les enfant h2 d'une div-->
div ~ h2 { <!-- style --> }
div > h2 { <!-- style --> } <!-- les enfant h2 direct de div-->
div > h2 { <!-- style --> }

pseudo element :
p::first-line { <!-- style --> } applique le style a la premiere ligne du p
::placeholder { <!-- style --> } applique le style au p

pseudo classe :
a:visited { <!-- style --> } applique le style aux liens déjà visité
p:not(.monStyle) { <!-- style --> } applique le style qui ne sont pas concerné par .monStyle

recup une classe
.bloc

recup un id
#bloc
