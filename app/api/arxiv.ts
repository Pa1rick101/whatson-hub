import axios from 'axios';
import { parseString } from 'xml2js';
import { promisify } from 'util';

const parseXml = promisify(parseString);

export async function searchArxiv(query: string, start: number = 0, maxResults: number = 10) {
  const baseUrl = 'http://export.arxiv.org/api/query';
  const response = await axios.get(baseUrl, {
    params: {
      search_query: query,
      start,
      max_results: maxResults,
    },
  });
  const xmlData = response.data;
  const parsedResults = await parseXml(xmlData);
  
  // Extract and format the entries from the parsed XML
  const entries = parsedResults.feed.entry || [];
  return entries.map((entry: any) => ({
    id: entry.id[0],
    title: entry.title[0],
    authors: entry.author.map((author: any) => author.name[0]),
    summary: entry.summary[0],
  }));
}