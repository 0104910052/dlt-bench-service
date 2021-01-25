import WebSocket from "ws";
import { loadEnvData } from "./load-env-data";
import env from "./load-env-data";

export const initServer = () => {};

const initWss = () => {
  const wss = new WebSocket.Server({
    port: 8080,
  });

  wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      console.log("received: %s", message);
    });

    ws.send("something");
  });

  return wss;
};