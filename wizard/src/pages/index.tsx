import '@/styles/globals.css';
import { useState } from 'react';

export default function Home() {

  const [sessionKey, setSessionKey] = useState("");
  const [copied, setCopied] = useState(false);

  const generateSessionKey = async () => {
    const req = await fetch("/api/private");
    const data = await req.json()
    setSessionKey(data["result"]);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sessionKey);
    setCopied(true);
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Liberland node management</h1>
      <p className="text-lg mb-4">Click below to generate a new session key.</p>
      {sessionKey !== "" && <p className="mb-4">Your session key is ready!</p>}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={generateSessionKey}
      >
        Generate a session key
      </button>
      <div className="mt-4">
        <input
          className="p-2 border border-gray-300 rounded w-64 mr-4"
          type="text"
          placeholder="Your session key…"
          disabled
          value={sessionKey}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          disabled={sessionKey == ""}
          onClick={() => {copyToClipboard()}}>{copied ? (<>Copied!</>) : (<>Copy to clipboard</>)}
          </button>
      </div>
    </div>
  );
}