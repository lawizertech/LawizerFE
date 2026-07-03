"use client";

import { useState, useEffect } from "react";

export default function VerifiedPage() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 0) {
      window.close();
    }
  }, [count]);

  return (
    <div className="h-screen w-screen bg-white flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-6 text-black">Your email has been verified 🎉</h1>

      <p className="text-4xl font-extrabold text-green-600">{count}</p>

      <p className="text-lg text-gray-600 mt-4">Closing in {count} seconds...</p>
    </div>
  );
}
