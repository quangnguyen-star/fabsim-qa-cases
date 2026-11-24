import { createApp } from "./app";

const port = Number(process.env.PORT ?? 5000);
createApp().listen(port, (err?: Error) => {
      if (err) throw err; // sim-matrix start-port: Express 5 passes listen errors here
  console.log(`API listening on http://localhost:${port}`);
});
