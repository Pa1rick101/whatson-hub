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
  const response = await fetch(`/api/fetchPapers?category=${category}&paperCount=${paperCount}`);
  if (!response.ok) {
    throw new Error('Failed to fetch papers');
  }
  return response.json();
}