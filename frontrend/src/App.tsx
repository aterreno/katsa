import React, { useState } from 'react';
import './App.css';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8080';

function App() {
  // FizzBuzz state
  const [fizzbuzzInput, setFizzbuzzInput] = useState('');
  const [fizzbuzzResult, setFizzbuzzResult] = useState<string | null>(null);
  const [fizzbuzzError, setFizzbuzzError] = useState<string | null>(null);

  // Anagram state
  const [anagramStr1, setAnagramStr1] = useState('');
  const [anagramStr2, setAnagramStr2] = useState('');
  const [anagramResult, setAnagramResult] = useState<string | null>(null);
  const [anagramError, setAnagramError] = useState<string | null>(null);

  const handleFizzbuzz = async (e: React.FormEvent) => {
    e.preventDefault();
    setFizzbuzzResult(null);
    setFizzbuzzError(null);
    try {
      const res = await fetch(`${API_BASE}/fizzbuzz?n=${encodeURIComponent(fizzbuzzInput)}`);
      const data = await res.json();
      if (res.ok) {
        setFizzbuzzResult(data.result);
      } else {
        setFizzbuzzError(data.error || 'Unknown error');
      }
    } catch (err) {
      setFizzbuzzError('Network error');
    }
  };

  const handleAnagram = async (e: React.FormEvent) => {
    e.preventDefault();
    setAnagramResult(null);
    setAnagramError(null);
    try {
      const res = await fetch(`${API_BASE}/anagram?str1=${encodeURIComponent(anagramStr1)}&str2=${encodeURIComponent(anagramStr2)}`);
      const data = await res.json();
      if (res.ok) {
        setAnagramResult(data.result ? 'Anagrams!' : 'Not anagrams');
      } else {
        setAnagramError(data.error || 'Unknown error');
      }
    } catch (err) {
      setAnagramError('Network error');
    }
  };

  return (
    <div className="App">
      <h1>FizzBuzz & Anagram Checker</h1>
      <section>
        <h2>FizzBuzz</h2>
        <form onSubmit={handleFizzbuzz}>
          <input
            type="number"
            value={fizzbuzzInput}
            onChange={e => setFizzbuzzInput(e.target.value)}
            placeholder="Enter a number"
            required
          />
          <button type="submit">Check FizzBuzz</button>
        </form>
        {fizzbuzzResult && <div>Result: {fizzbuzzResult}</div>}
        {fizzbuzzError && <div style={{color: 'red'}}>Error: {fizzbuzzError}</div>}
      </section>
      <section>
        <h2>Anagram Checker</h2>
        <form onSubmit={handleAnagram}>
          <input
            type="text"
            value={anagramStr1}
            onChange={e => setAnagramStr1(e.target.value)}
            placeholder="First string"
            required
          />
          <input
            type="text"
            value={anagramStr2}
            onChange={e => setAnagramStr2(e.target.value)}
            placeholder="Second string"
            required
          />
          <button type="submit">Check Anagram</button>
        </form>
        {anagramResult && <div>Result: {anagramResult}</div>}
        {anagramError && <div style={{color: 'red'}}>Error: {anagramError}</div>}
      </section>
    </div>
  );
}

export default App;
