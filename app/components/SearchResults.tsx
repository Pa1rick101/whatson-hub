interface Paper {
  id: string;
  title: string;
  authors: string[];
  summary: string;
}

interface SearchResultsProps {
  results: Paper[];
  searched: boolean;
}

export default function SearchResults({ results, searched }: SearchResultsProps) {
  if (searched && (!Array.isArray(results) || results.length === 0)) {
    return <div className="text-center text-gray-600 mt-8">No results found.</div>;
  }

  if (!searched || results.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-3xl mt-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Search Results</h2>
      <div className="space-y-8">
        {results.map((paper) => (
          <div key={paper.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                {paper.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {paper.authors.join(', ')}
              </p>
              <p className="text-gray-800 mb-4 line-clamp-3">
                {paper.summary}
              </p>
              <a
                href={`https://arxiv.org/abs/${paper.id.split('/').pop()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}