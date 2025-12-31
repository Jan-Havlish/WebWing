import { useState } from "preact/hooks";

export function App() {
  const [result, setResult] = useState("Waiting for interaction...");

  async function callCpp() {
    try {
      const res = await window.cpp_hello("world");
      console.log("Raw C++ response:", res);

      setResult(res.message + " (Original request: " + res.request + ")");
    } catch (err) {
      setResult("Error calling C++: " + err);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-900 via-teal-900 to-slate-900 text-white p-8">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold bg-linear-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Hello from WebWing!
          </h1>
          <p className="text-xl text-slate-300">
            This is a WebWing starter app.
          </p>
        </div>

        <button
          onClick={callCpp}
          className="px-8 py-4 bg-linear-to-r from-teal-500 to-cyan-600 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-teal-500/50"
        >
          Call C++ from JS
        </button>

        {result && (
          <div className="mt-6 p-6 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 shadow-xl">
            <p className="text-slate-200 font-mono">{result}</p>
          </div>
        )}
      </div>
    </main>
  );
}
