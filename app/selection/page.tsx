'use client';

import { useState } from 'react';
import { fetchArxivPapers } from '../api/arxiv';
import SearchResults from '../components/SearchResults';

interface Paper {
  id: string;
  title: string;
  authors: string[];
  summary: string;
}

const arxivCategories = [
  { code: 'cs.AI', name: 'Artificial Intelligence' },
  { code: 'cs.CL', name: 'Computation and Language' },
  { code: 'cs.CV', name: 'Computer Vision' },
  { code: 'cs.LG', name: 'Machine Learning' },
  { code: 'cs.NE', name: 'Neural and Evolutionary Computing' },
  { code: 'cs.RO', name: 'Robotics' },
  { code: 'math.OC', name: 'Optimization and Control' },
  { code: 'stat.ML', name: 'Statistics - Machine Learning' },
  { code: 'physics.comp-ph', name: 'Computational Physics' }
];

export default function SelectionPage() {
  const [results, setResults] = useState<Paper[]>([]);
  const [category, setCategory] = useState(arxivCategories[0].code);
  const [paperCount, setPaperCount] = useState(1);
  const [searched, setSearched] = useState(false);

  const handleFetch = async () => {
    const fetchedPapers = await fetchArxivPapers(category, paperCount);
    setResults(fetchedPapers);
    setSearched(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Whatson Search</h1>
      <div className="mb-4 w-full max-w-md">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {arxivCategories.map((cat) => (
            <option key={cat.code} value={cat.code}>{cat.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-4 w-full max-w-md">
        <label htmlFor="paperCount" className="block text-sm font-medium text-gray-700">Number of papers (max 5):</label>
        <input
          type="number"
          id="paperCount"
          min="1"
          max="5"
          value={paperCount}
          onChange={(e) => setPaperCount(Math.min(5, Math.max(1, parseInt(e.target.value))))}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>
      <button
        onClick={handleFetch}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Fetch Papers
      </button>
      <SearchResults results={results} searched={searched} />
    </main>
  );
}
