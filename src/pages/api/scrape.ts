import axios from 'axios';
import { load } from 'cheerio';

export default async function handler(req, res) {
  const { query } = req.query;

  try {
    const { data } = await axios.get(`https://www.google.com/search?q=${encodeURIComponent(query)}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });

    const $ = load(data);
    const results = [];

    $('div.tF2Cxc').each((_, el) => {
      const title = $(el).find('h3').text();
      const link = $(el).find('a').attr('href');
      results.push({ title, link });
    });

    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error: 'Scraping failed' });
  }
}
