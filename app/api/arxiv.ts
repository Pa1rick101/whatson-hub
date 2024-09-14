import axios from 'axios';
import { parseString } from 'xml2js';
import { promisify } from 'util';

interface ArxivResponse {
  feed: {
    entry?: Array<{
      id: string[];
      title: string[];
      author: Array<{ name: string[] }>;
      summary: string[];
    }>;
  };
}

interface Paper {
  id: string;
  title: string;
  authors: string[];
  summary: string;
}

const parseXml = promisify(parseString);

export async function fetchArxivPapers(category: string, paperCount: number): Promise<Paper[]> {
  const url = `http://export.arxiv.org/api/query?search_query=cat:${category}&max_results=${paperCount}&sortBy=submittedDate&sortOrder=descending`;
  const response = await axios.get(url);
  const result = await parseXml(response.data) as ArxivResponse;

  return result.feed.entry?.map(entry => ({
    id: entry.id[0],
    title: entry.title[0],
    authors: entry.author.map(a => a.name[0]),
    summary: entry.summary[0],
  })) || [];
}