import React, { useState } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    setPosition({ x, y });
  };

  const handleYes = () => {
    setAnswer('yes');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center overflow-hidden">
      <div className="relative">
        {!answer ? (
          <div className="text-center">
            <div className="animate-float">
              <Heart className="w-20 h-20 text-red-500 mx-auto mb-8 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold text-red-600 mb-8 animate-fadeIn">
              Will you be my Valentine?
            </h1>
            <div className="space-y-4">
              <button
                onClick={handleYes}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg"
              >
                Yes 🥰
              </button>
              <button
                style={{
                  position: 'absolute',
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={moveNoButton}
                className="bg-gray-500 text-white font-bold py-3 px-8 rounded-full"
              >
                No 😢
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center animate-fadeIn">
            <Heart className="w-32 h-32 text-red-500 mx-auto mb-8 animate-bounce" />
            <h2 className="text-4xl font-bold text-red-600 mb-4">
              Yay! I'm so happy! 💖
            </h2>
            <p className="text-xl text-red-400">
              You've made me the happiest person ever!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;