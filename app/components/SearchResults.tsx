interface Paper {
  id: string;
  title: string;
  authors: string[];
  summary: string;
}

export default function SearchResults({ results }: { results: Paper[] }) {
  if (!Array.isArray(results) || results.length === 0) {
    return <div>No results found.</div>;
  }

  return (
    <div className="space-y-8"> {/* Added space-y-8 for vertical spacing */}
      {results.map((paper) => (
        <div key={paper.id} className="border-b pb-6"> {/* Added border and padding */}
          <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{paper.authors.join(', ')}</p>
          <p className="text-gray-800">{paper.summary}</p>
        </div>
      ))}
    </div>
  );
}