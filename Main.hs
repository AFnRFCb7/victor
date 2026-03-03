{-# LANGUAGE OverloadedStrings #-}

import Web.Scotty
import qualified Text.Blaze.Html5 as H
import qualified Text.Blaze.Html5.Attributes as A
import Text.Blaze.Html.Renderer.Text (renderHtml)
import Data.Text.Lazy (Text)

main :: IO ()
main = scotty 3000 $ do
  get "/" $ Web.Scotty.html $ renderHtml page

-- HTML page with CSS grid for the board
page :: H.Html
page = H.docTypeHtml $ do
  H.head $ do
    H.title "Tic-Tac-Toe"
    -- CSS to make a 3x3 grid
    H.style $ H.toHtml $ unlines
      [ "#board { display: grid; grid-template-columns: repeat(3, 100px); grid-gap: 5px; }"
      , "#board button { width: 100px; height: 100px; font-size: 2em; }"
      ]
  H.body $ do
    H.h1 "Tic-Tac-Toe"
    H.div H.! A.id "board" $ mapM_ button [0..8]
    H.script $ H.toHtml jsCode

-- Each Tic-Tac-Toe square
button :: Int -> H.Html
button i = H.button
  H.! A.onclick (H.toValue $ "move(" ++ show i ++ ")")
  $ H.toHtml (" " :: String)

-- JavaScript for handling clicks
jsCode :: String
jsCode = unlines
  [ "let board = Array(9).fill('');"
  , "let current = 'X';"
  , "function move(i) {"
  , "  if (board[i] === '') {"
  , "    board[i] = current;"
  , "    document.getElementById('board').children[i].innerText = current;"
  , "    current = current === 'X' ? 'O' : 'X';"
  , "  }"
  , "}"
  ]
