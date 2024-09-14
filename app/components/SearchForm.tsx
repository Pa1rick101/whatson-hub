import { useState } from 'react';

interface SearchFormProps {
  onSearch: (query: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search arXiv papers"
      />
      <button type="submit">Search</button>
    </form>
  );
}