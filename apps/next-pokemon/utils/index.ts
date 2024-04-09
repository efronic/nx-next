import * as v from 'valibot';

export const PokemonSchema = v.object({
  id: v.number('id should be a number'),
  name: v.object({
    english: v.string(),
    japanese: v.string(),
    chinese: v.string(),
    french: v.string(),
  }),
  type: v.array(v.string()),
  base: v.object({
    hp: v.number(),
    attack: v.number(),
    defense: v.number(),
    special_attack: v.number(),
    special_defense: v.number(),
    speed: v.number(),
  }),
});
export const PokemonArraySchema = v.array(PokemonSchema);

