"use client";

import Chessground from "@react-chess/chessground";
import "chessground/assets/chessground.base.css";
import "chessground/assets/chessground.brown.css";
import "chessground/assets/chessground.cburnett.css";

export const ChessBoard = () => {
  const config = {};
  return (
    <Chessground
      width={400}
      height={400}
    />
  );
};
