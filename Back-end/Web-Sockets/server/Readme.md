# Web Sockets Server (Project)

This is a simple app built with `Express.js` and `ws` npm library. Let's go step by step of creating a new project to
running and testing your own web sockets server.

**Initialize the project:**

```bash
npm init -y
```

**Install required dependencies:**

```bash
npm i express ws
```

Create a file `index.js`, write the following code.

```js
import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 8080;

const server = app.listen(port, () => {
  console.log("Server is listening...");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", function (data) {
    console.log("Data from client %s", data);
    ws.send("Received Successfully");
  });
});

```

Now run

```bash
node index.js
```

To test it you can either use Postman or `hoppscotch.io`.

Go to <https://hoppscotch.io/realtime/websocket/>

Type `ws://localhost:8080` and establish a connection. Now you can test it by sending a `JSON` request.

Alternatively go to [Front-end](../client/index.html) to test it with a custom UI built with simple html css and javascript.
