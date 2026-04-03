{ pkgs ? import <nixpkgs> {} }:

# Use a recent nixpkgs snapshot for Node 22+
let
  nixpkgsSrc = import (builtins.fetchTarball {
    url = "https://github.com/NixOS/nixpkgs/archive/refs/heads/nixos-24.05.tar.gz";
  }) {};
in
nixpkgsSrc.mkShell {
  buildInputs = [
	pkgs.chromium
	nixpkgsSrc.jetbrains.idea-community
    nixpkgsSrc.nodejs_22
    nixpkgsSrc.nodePackages.npm
	nixpkgsSrc.yarn
  ];

  # Optional: set NODE_ENV for development
  shellHook = ''
    echo "Welcome to Vue 8 project shell!"
    echo "Node version: $(node -v)"
    echo "npm version:  $(npm -v)"
  '';
}
