# Tic-Tac-Toe Haskell Web App

A minimal web-based Tic-Tac-Toe game built with Haskell, Scotty, and Blaze HTML.  
This project is designed as a **learning and exploration tool** — you can run it locally, explore the generated HTML in your browser inspector, and experiment with functional programming, HTML generation, and simple JavaScript interactivity.

---

## Features

- Runs a **web server** on `http://localhost:3000` using [Scotty](https://hackage.haskell.org/package/scotty).  
- Serves a **single-page HTML** Tic-Tac-Toe board using [Blaze HTML](https://hackage.haskell.org/package/blaze-html).  
- Implements **basic gameplay logic in JavaScript**:  
  - Alternates between X and O for each move.  
  - Updates the board buttons dynamically in the browser.  
- CSS grid layout for a **3×3 board** with large, clickable buttons.

---

## Limitations

- **No win detection**: The game continues even if a player has already won.  
- **No tie detection**: The game does not stop when all cells are filled.  
- **No reset button**: Refresh the page to start a new game.  
- **Client-side only game logic**: Haskell serves the page, but the actual game runs entirely in JavaScript after the page loads.  
- Minimal styling and UI; the focus is on exploration and understanding the flow from Haskell → Blaze → browser DOM.

---

## Getting Started

### Requirements

- [Nix](https://nixos.org/) (tested on NixOS)  
- GHC and Scotty dependencies (provided via `nix-shell`)  

### Running the App

1. Open a terminal in the project directory.  
2. Start the development shell:

```bash
nix-shell
