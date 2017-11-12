# express-starter


# Generators

- Create a new handler, we can use the gulp generator command `gulp add-handler --name test`. This will create a file `handlers/test/test.handler.js`. **You need to import this manually in `app/routes.js`**

- Remove a handler, we can use the gulp generator command `gulp remove-handler --name test`. This will remove the folder `handlers/test` and also will remove into the `handlers/index.js`. **This will not be remove the in `app/routes.js`.** .

For production -> https://github.com/babel/example-node-server