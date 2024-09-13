'use client';

import { useState } from 'react';
import { searchArxiv } from '../api/arxiv';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';

interface Paper {
  id: string;
  title: string;
  authors: string[];
  summary: string;
}

export default function SelectionPage() {
  const [results, setResults] = useState<Paper[]>([]);

  const handleSearch = async (query: string) => {
    const searchResults = await searchArxiv(query);
    setResults(searchResults);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">arXiv Paper Search</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResults results={results} />
    </main>
  );
}
