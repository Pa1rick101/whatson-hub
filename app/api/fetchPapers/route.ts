import { NextResponse } from 'next/server';
import axios from 'axios';
import { parseString } from 'xml2js';
import { promisify } from 'util';

const parseXml = promisify(parseString);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const paperCount = searchParams.get('paperCount');

  if (!category || !paperCount) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }

  try {
    const url = `https://export.arxiv.org/api/query?search_query=cat:${category}&max_results=${paperCount}&sortBy=submittedDate&sortOrder=descending`;
    const response = await axios.get(url);
    const result = await parseXml(response.data) as { feed: { entry?: any[] } };

    const papers = result.feed.entry?.map((entry) => ({
      id: entry.id[0],
      title: entry.title[0],
      authors: entry.author.map((a: { name: string[] }) => a.name[0]),
      summary: entry.summary[0],
    })) || [];

    return NextResponse.json(papers);
  } catch (error) {
    console.error('Error fetching papers:', error);
    return NextResponse.json({ error: 'Failed to fetch papers' }, { status: 500 });
  }
}