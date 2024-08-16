import React from 'react';
import ChessBoard from './components/ChessBoard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-300 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
        <ChessBoard />
      </div>
        <p className='font-bold text-center text-green-900 mt-3 lg:text-2xl'>Khaireddine Weld Biohazard</p>
    </div>
  );
}

export default App;
