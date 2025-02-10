import { useState } from "react";

function Attempts({ attempts }) {
  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64">
      <h2 className="text-lg font-bold">Pogingen</h2>
      <ul className="mt-4 max-h-40 overflow-auto">
        {attempts.length > 0 ? (
          attempts.map((attempt, index) => (
            <li key={index} className="p-1 border-b border-gray-600">{attempt}</li>
          ))
        ) : (
          <p className="text-gray-400">Nog geen pogingen.</p>
        )}
      </ul>
    </div>
  );
}

export default Attempts;
