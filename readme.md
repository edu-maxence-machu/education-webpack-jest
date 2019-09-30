# Mise en place d'un projet web avec Webpack et Jest

L'objectif de ce projet consiste en la mise en place d'un projet configuré avec Webpack et testé avec Jest.

##Webpack

> Webpack est un outil qui est aujourd'hui incontournable dès lors que l'on travaille sur des projets JavaScript complexes. Il va nous permettre de morceler notre code sous forme de module qui seront ensuite fusionnés en un seul fichier par Webpack. Il dispose, en plus, d'un système de "loaders" qui vont permettre d'inclure de nouveaux types de fichiers ou d'appliquer des transformations spécifique (comme une transformation ES2015->ES5).

Source: [GraphikArt](https://www.grafikart.fr/formations/webpack "GraphikArt")

### 1. Création du projet 

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> PARTIE 4

### 2. Configuration

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> PARTIE 5 


### 3. Plugin HTML

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> PARTIE 6


### 4. Dev Server, rechargement automatique

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> PARTIE 6 (2)


### 5. Écrire du JS ES6 et babel

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> PARTIE 7.a


### 6. Babel Polyfill

Afin d'utiliser des fonctions avancées comme le fetch, nous utiliserons Babel/Polyfill

**Référence: https://babeljs.io/docs/en/babel-polyfill**

- Ajouter le require en haut du fichier webpack.config.js
```javascript 
require("@babel/polyfill");
```

- Remplacez la configuration "entry"

```javascript 
entry : {
	main: [
		 '@babel/polyfill',
		'./src/index.js',
	]
},
```


### 7. Configuration du CSS

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> Part 8


### 7. Configuration de SASS

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> Part 8 : "Convert SCSS to CSS"


### 8 Auto-Prefixer CSS

**Référence: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e**
-> Part 8 : "Adding post-css"


