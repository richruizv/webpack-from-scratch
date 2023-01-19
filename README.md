## Creation of a webpack project from the beggining

Before you use this proyect you should have installed:

1. node v16.8.0
2. npm 7.21.0

## Commands used to create this project

1. Add the node_modules directory and the lodash library by using: 

    `npm install lodash`

2. Install webpack using:

    `npm install --save-dev webpack webpack-cli`

3. Install the scss loaders using:

    `npm install --save-dev css-loader style-loader sass-loader sass`

4. You can use plugins like webpack-bundling-analyzer that will help you to determine how distribute are your application

    `npm install --save-dev webpack-bundle-analyzer`

5. Install webpack-dev-server to avoid recompiling each time you are making a change

    `npm install --save-dev webpack-dev-server`

6. Finally, you can use this commands to check the magic

    Run this to build once:

    `npm run build`

    Run this to watch any change:

    `npm run dev`