import express, { Request, Response, Application } from 'express';
import { fizzbuzz } from './fizzbuzz';
import { isAnagram } from './anagram';

export const app = express();
const port = process.env.PORT || 3000;

app.get('/fizzbuzz', (req: Request, res: Response) => {
  const n = parseInt(req.query.n as string, 10);
  if (isNaN(n)) {
    res.status(400).json({ error: 'Query parameter n must be a number' });
    return;
  }
  try {
    const result = fizzbuzz(n);
    res.json({ result });
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
});

app.get('/anagram', (req: Request, res: Response) => {
  const str1 = req.query.str1 as string;
  const str2 = req.query.str2 as string;
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    res.status(400).json({ error: 'Query parameters str1 and str2 are required' });
    return;
  }
  const result = isAnagram(str1, str2);
  res.json({ result });
});

// Only start the server if this file is run directly, not when imported for tests
if (require.main === module) {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`);
  });
}
