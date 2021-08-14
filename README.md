# Phaser 3 + Webpack + TypeScript (template)
This is a template for developing videogames with the Phaser 3 library and TypeScript.

[![current](https://img.shields.io/badge/Current-1.1.0-green.svg)](https://github.com/VikingCodeBlog/Phaser3-TypeScript/blob/main/package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.3.5-blue.svg)](https://www.typescriptlang.org/)
[![Phaser](https://img.shields.io/badge/Phaser-3.55.2-orange.svg)](https://phaser.io/)
[![WebPack](https://img.shields.io/badge/WebPack-5.50.0-blue.svg)](https://webpack.js.org/)

![image](https://user-images.githubusercontent.com/59940005/129425532-d889ab52-adfe-4352-9702-f69d7de63ae8.png)

You can use this as a template.

![image](https://user-images.githubusercontent.com/59940005/129425334-d139a1e0-c6b2-4679-b6d8-65d556020709.png)

## Requirements
Node
https://nodejs.org

## Recommended
Install ESLINT and Prettier plugins in your IDE.
https://eslint.org/
https://prettier.io/

## Install

```bash
git clone https://github.com/VikingCodeBlog/Phaser3-TypeScript
cd Phaser3-TypeScript
npm i
```

## Start
```bash
npm start
```
Now, you can see your game at http://localhost:9000/

This is an empty game 😥 time to work 💪

![image](https://user-images.githubusercontent.com/59940005/129447224-5614e625-79ae-41e1-9653-4acec4230862.png)

## Start production mode
```bash
npm run pro
```

## Lint
```bash
npm run lint
```

## Folders
```bash
index.html
└── src
   ├── assets
   ├── models
   ├── scenes
   ├── scripts
   └── main.ts
```

### index.html
It is the entry point of the application, it will create a container "game" and it will import the library "dist / main.js" generated with your game.

### main.ts
The start of your game in typescript

### src/
All files inside the "src" folder will be compiled into a folder called "dist"

### src/assets
Images, videos, sprites, sounds, json data ...

### src/models
Models of your application

Example, file character.ts

```ts
export interface character {
  name: string;
  speed: number;
}
```

### src/scenes
Your scenes.

### src/scripts
Scripts that you can use in multiple scenes.

## How to use Phaser types?
Phaser provides us with some types inside the Phaser.Types object, you can use it as a TypeScript Objects.

![image](https://user-images.githubusercontent.com/59940005/129427017-c2261827-3aaf-489d-b02e-c87d78b2230d.png)

It seems like a hard work, but calm, your IDE will help you.

![image](https://user-images.githubusercontent.com/59940005/129427039-4b62e909-f4ec-4d8f-b0b5-726396807bd9.png)

## How to use enviroment variables?

### Create variables
Add properties to enviroment in src/enviroments/enviroment{your enviroment}.ts
```ts
export const environment = {
  env: 'dev',
  title: 'Wellcome to Phaser',
  newProperty: 'im a property :)'
};
```

### Use variables
You always have to import the same environment file, environment/enviroment.ts, webpack will change this file to the environment you are in.

```ts
import { environment } from '../enviroments/enviroment';

// ...

create(): void {
    // TODO
    this.add.text(260, 280, `${environment.title} - ${environment.env}`);
}
```

### Use enviroments
There are different scripts in package.json, these make use of ENV_TARGET to indicate the environment they are going to use.

```json
  "scripts": {
    "build": "webpack --env ENV_TARGET=pro",
    "start": "webpack serve --mode development --env ENV_TARGET=dev",
    "pro": "webpack serve --env ENV_TARGET=pro",
    "lint": "eslint . --ext .ts"
  },
```
