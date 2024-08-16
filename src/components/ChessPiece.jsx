import React from 'react';

const pieceUnicode = {
  'Wking': '♔', 'Wqueen': '♕', 'Wrook': '♖', 'Wbishop': '♗', 'Wknight': '♘', 'Wpawn': '♙',
  'Bking': '♚', 'Bqueen': '♛', 'Brook': '♜', 'Bbishop': '♝', 'Bknight': '♞', 'Bpawn': '♟'
};

const ChessPiece = ({ piece }) => {
  if (!piece) return null;
  return <span className='sm:text-xl lg:text-5xl'>{pieceUnicode[piece]}</span>;
};

export default ChessPiece;
