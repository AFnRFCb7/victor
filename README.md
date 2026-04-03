# I am learning Headers and VUE

This is a beginner-friendly **Vue 3 project with JavaScript**.  
It includes a simple **click counter** so you can start playing with Vue right away!

---

## Features

- Interactive counter button  
- Instant browser updates when you save changes  
- Built with **Vue 3** and **Vite**  
- Works on **NixOS**, **Windows**, **Linux**, or **Mac**

---

## Requirements

- Node.js **v22+**  
- npm  
- Nix (optional, recommended for NixOS users)

---

## Running the project on NixOS

1. Open a terminal.  
2. Enter the project folder:

```bash
cd ~/projects/my-vue-app

https://www.islanguages.com/
```

## When I finish for a session (done for now not forever)
1. I enter `git commit -am "{some message}` where some message is a description of what I did
2. I enter `git push ssh HEAD`

This will commit everything I did and push it to github where others can see it.

## Questions

1. im trying to use vs code can i have the steps to make my image in 

## Frontend

To start the frontend
```
npm run dev -- --host
```

## Backend

To start the backend
`node server.js`


        (Phone / Laptop)
               │
               │  HTTP request (load page) (http://192.168.1.135:5173/#/employment)
               ▼
     ┌──────────────────────┐
     │   Frontend (Vue)     │
     │  Vite dev server     │
     │  :5173               │
     └──────────────────────┘
               │
               │  fetch('/api/employment')
               │  POST form data
               ▼
     ┌──────────────────────┐
     │  Backend (Node)      │
     │  Express server      │
     │  :3000               │
     └──────────────────────┘
               │
               │  (process / save data)
               ▼
        ┌──────────────┐
        │ Storage      │
        │ (file / DB)  │
        └──────────────┘


I had to

```
sudo iptables -I INPUT -p tcp --dport 3000 -j ACCEPT
sudo iptables -I INPUT -p tcp --dport 5173 -j ACCEPT

```