import express from 'express';
import { pokemon } from './pokemon';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = express();
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});
app.get('/pokemon', (_, res) => {
  res.send(pokemon);
});
app.get('/search', (req, res) => {
  const q = ((req.query.q as string) ?? '').toLocaleLowerCase();
  if (!q) {
    res.status(400).send({ message: 'Missing query parameter `q`' });
    return;
  }
  res.send(
    pokemon.filter(({ name: { english } }) =>
      english.toLocaleLowerCase().includes(q)
    )
  );
});
app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
