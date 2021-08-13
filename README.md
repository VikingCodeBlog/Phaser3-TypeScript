# Phaser 3 + Webpack + TypeScript (template)
This is a template for developing videogames with the Phaser 3 library and TypeScript.

[![current](https://img.shields.io/badge/Current-1.0.0-<COLOR>.svg)](https://github.com/VikingCodeBlog/Phaser3-TypeScript/blob/main/package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.3.5-blue.svg)](https://www.typescriptlang.org/)
[![Phaser](https://img.shields.io/badge/Phaser-3.55.2-orange.svg)](https://phaser.io/)
[![WebPack](https://img.shields.io/badge/WebPack-5.50.0-blue.svg)](https://webpack.js.org/)

![image](https://user-images.githubusercontent.com/59940005/129425532-d889ab52-adfe-4352-9702-f69d7de63ae8.png)

You can use this as a template.

![image](https://user-images.githubusercontent.com/59940005/129425334-d139a1e0-c6b2-4679-b6d8-65d556020709.png)

## Requirements
Node
https://nodejs.org

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

![image](https://user-images.githubusercontent.com/59940005/129426602-6a935e63-2042-450e-9ad5-82be09d98afd.png)


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
