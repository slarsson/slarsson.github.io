---
title: Online Multiplayer Game
image: /tanks-1.png
project: personal
weight: 1
text: | 
    Online multiplayer shooting game created with Go, TypeScript and WebAssembly.
---

<figure>
  <img src="/tanks-1.png" alt="game screen 1" style="width:100%">
</figure> 

During summer 2020 I worked on a personal project of implementing a simple online multiplayer game in the web browser. The game lets a player control a tank and the goal is to kill the opponents, inspired by games such as Battlefield and World of Tanks.  

The implementation consists of two parts, a client and server application. The clients connect to the server over a WebSocket-connection. This game implements an *“authoritative servers and dumb clients”* architecture.  

The game server is written in Go and the server handles the game state. Go was chosen since it has good support for concurrency. The clients send updates to the server, the server then updates the game state and broadcasts it to all clients. 

The client is written in TypeScript and the framework three.js is used to render 3D graphics. Every 50ms the client sends an update to the server; the updates consist of what buttons has been pressed (for example what direction the player wants to drive in). By sending operations instead of the player position to the server (most) cheating can be avoided. To keep the latency to minimal the client updates the game state locally and the syncs it with the received state from the server. Instead of having to write the game logic twice (TypeScript and Go) the client uses WebAssembly to run parts of the server code on the client. 

<blockquote>

Code: 
[https://github.com/slarsson/tanks/
](https://github.com/slarsson/tanks/
 "the source code on github")

</blockquote>

<figure>
  <img src="/tanks-2.png" alt="game screen 2" style="width:100%">
</figure> 

<figure>
  <img src="/tanks-3.png" alt="game screen 3" style="width:100%">
</figure> 

