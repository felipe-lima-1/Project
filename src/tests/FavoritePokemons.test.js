import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

describe('teste FavoritePokemon', () => {
  test('teste not found', () => {
    renderWithRouter(<FavoritePokemons />);
    const notFound = screen.getByText('No favorite pokemon found');
    expect(notFound).toBeInTheDocument();
  });
});
