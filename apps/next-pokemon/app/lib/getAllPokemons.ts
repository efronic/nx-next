import { Pokemon } from '@nx-next/shared-types';
import { PokemonArraySchema } from '../../utils';
import * as v from 'valibot';

export const getAllPokemons = async (): Promise<Pokemon[] | undefined> => {
  const res = await fetch(`http://localhost:3001/pokemon`);
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  try {
    const response = await res.json();
    const validationResult = v.parse(PokemonArraySchema, response);
    return response;
  } catch (error) {
    console.error('efron error:', error);
  }
  return [] as Pokemon[];
};
