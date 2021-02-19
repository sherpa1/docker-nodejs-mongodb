# Initiation à Docker + Node.js + MongoDB

## Particularités du fonctionnement de NOde.js avec Docker Compose

Les dépendances **NPM doivent être installées directement dans le container**, et non répliquées depuis le volume local vers le volume distant

Pour ce faire, on modifie manuellement les dépendances du fichier package.json local, puis on exécute la commande "npm install" via le docker-compose.yml.

Si on ne connnait pas la version du module NPM à installer, on laisse vide : `exemple-de-module-npm:""`.

Ainsi, les dépendances NPM sont directement installées dans le contexte du container (système d'exploitation et système de fichiers).

A noter : les dépendances installées au sein du dossier node_modules dans le container, sont répliquées dans le dossier node_modules du volume local (Ne pas y toucher).

Lorsque l'on souhaite ajouter une nouvelle dépendance (ex: nodemon), on modifie manuellement à nouveau le fichier package.json local et on exécute à nouveau la commande d'installation saisie dans docker-compose.yml.

Il faut donc adapter à chaque fois que nécessaire la valeur de l'attribut "command" du service associé à l'application Node.js dans le fichier docker-compose.yml (cf. ci-dessous "Commandes utiles / Docker + Node.js")

## Variables d'environnement

En vous inspirant des fichiers .env.example, remplir les fichiers .env se trouvant dans :

- ./api
- ./mongoexpress
- ./mongodb

## Commandes utiles

## Docker

#### Lancer les services Docker

```
docker-compose up
```

#### Lancer les services Docker et reprendre la main dans Bash

```
docker-compose up -d
```

#### Arrêter les services Docker

```
docker-compose stop
```

### Docker + Node.js

#### Installer les dépendances NPM et démarrer l'application Node.js

```
command: bash -c 'npm install && npm start' #install node modules then start
```

#### Démarrer l'application Node.js

```
command: npm start #production only
```

#### Démarrer l'application Node.js avec Hot Reloading via Nodemon

- à utiliser en environnement de développement uniquement
- nécessite d'avoir installer la dépendance Nodemon au préalable

```
command: bash -c 'npm run dev' #hot reloading with nodemon for dev only
```

## Todo

Problème avec Mongo-Express (à corriger)

---

**Alexandre Leroux**

- _Mail_ : alex@sherpa.one
- _Github_ : sherpa1
- _Twitter_ : @_sherpa_
- _Discord_ : sherpa#3890

_Enseignant vacataire à l'Université de Lorraine_

- IUT Nancy-Charlemagne (LP Ciasie)

- Institut des Sciences du Digital (Masters Sciences Cognitives)
