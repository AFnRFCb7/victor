# shell.nix
{ pkgs ? import <nixpkgs> {} }:

let
  ghcEnv = pkgs.haskellPackages.ghcWithPackages (h: with h; [
    scotty
    blaze-html
    text
  ]);
in

pkgs.mkShell {
  buildInputs = [ ghcEnv ];

  shellHook = ''
    echo "Welcome to Tic-Tac-Toe Haskell dev shell!"
    echo "You can now run: runhaskell Main.hs"
  '';
}
