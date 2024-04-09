import { Pokemon } from '@nx-next/shared-types';
import { getPokemons } from '../lib/getPokemons';

type Props = { params: { searchTerm: string } };

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const wikiData: Promise<Pokemon[] | undefined> = getPokemons(searchTerm);
  const results = await wikiData;
  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      <ul>
        {results ? (
          results.map(({ name: { english }, id }) => {
            return <li key={id}>{english}</li>;
          })
        ) : (
          <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
        )}
      </ul>
    </main>
  );

  return content;
}
