'use client'; // This is required for buttons to work

import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function Home() {
  const [forgiven, setForgiven] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: '50%', left: '60%' });
  const [hovered, setHovered] = useState(false);

  // 1. EDIT THIS: Your Apology Message
  const headerText = "I'm really sorry My Cute Little Loveeee😔";
  const bodyText = "I didn't mean to say these things to you which made you feel hurt due to my words. You mean everything to me in my life now, Can you please forgive this bhondu?😭";
  
  // 2. EDIT THIS: The Success Message
  const successHeader = "Yayyyy! Aapne apne bhondu ko maaf kardiya!! 💌❤️";
  const successBody = "I pinky promise i would never ever in my life think like this and jinse bhi mujhe dikkat hogi khul kar bolunga and i want to say one sentence but i know you won't find it appropriate since we are not in relationship but take it from my side as an apology, Mi Tula khoop khoop prem kartey mala anshuuuuu!! 😭😭💘💘";

  // This function makes the "No" button run away
  const moveNoButton = () => {
    const randomX = Math.random() * 80; // Random position 0-80%
    const randomY = Math.random() * 80;
    setNoPosition({ top: `${randomY}%`, left: `${randomX}%` });
    setHovered(true);
  };

  // This function runs when she clicks "Yes"
  const handleForgive = () => {
    setForgiven(true);
    // Fire confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-pink-100 text-center">
      
      {!forgiven ? (
        // STATE 1: ASKING FOR FORGIVENESS
        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-lg w-full border-4 border-pink-200">
          <h1 className="text-4xl font-bold text-red-500 mb-6">{headerText}</h1>
          <p className="text-gray-700 text-xl mb-10 leading-relaxed">
            {bodyText}
          </p>

          <div className="relative h-20 w-full">
            {/* YES BUTTON */}
            <button
              onClick={handleForgive}
              className="absolute left-10 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-110"
            >
              Yes
            </button>

            {/* NO BUTTON (RUNS AWAY) */}
            <button
              onMouseEnter={moveNoButton} // Moves when mouse touches it
              onClick={moveNoButton}      // Moves if clicked on mobile
              style={{
                position: hovered ? 'absolute' : 'absolute',
                top: hovered ? noPosition.top : '0',
                left: hovered ? noPosition.left : '60%',
                transition: 'all 0.2s ease' // Smooth movement
              }}
              className="bg-gray-400 text-white font-bold py-3 px-8 rounded-full text-lg cursor-not-allowed"
            >
              No
            </button>
          </div>
        </div>
      ) : (
        // STATE 2: SUCCESS SCREEN
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold text-pink-600 mb-4">{successHeader}</h1>
          <p className="text-2xl text-gray-800">{successBody}</p>
        </div>
      )}
      
    </main>
  );
}
