import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql-folder/get-pokemons';
import { Pokemon } from '../components/Pokemon';

const gqlVariables = {
  limit: 9,
  offset: 0,
};

export const PokemonsContainer = () => {
  const { loading, error, data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
      <div className="container">
          {pokemons && pokemons.results.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
  )
};