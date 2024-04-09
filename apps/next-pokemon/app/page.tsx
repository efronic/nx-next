import { Pokemon } from '@nx-next/shared-types';
import Search from './components/Search';
import styles from './page.module.scss';
import { getAllPokemons } from './lib/getAllPokemons';

export default async function Index() {
 const pokemons: Promise<Pokemon[] | undefined> = getAllPokemons();
 const results = await pokemons;
  return (
    <div className={styles.page}>
      <Search />
      {results?.map((pokemon, index) => (
        <div key={index}>
          <h2>{pokemon.name.english}</h2>
        </div>
      ))}
    </div>
  );
}
