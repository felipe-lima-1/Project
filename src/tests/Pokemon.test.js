import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste Pokemon', () => {
  test('Teste Imagem', () => {
    renderWithRouter(<App />);
    const image = screen.getByRole('img', { name: 'Pikachu sprite' });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
      'alt',
      'Pikachu sprite',
    );
  });
  test('Teste src e alt', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    const favoritePokemon = screen.getByLabelText(/pokémon favoritado?/i);
    userEvent.click(favoritePokemon);
    const selectedFavorite = screen.getByRole('img', { name:
        'Pikachu is marked as favorite' });
    expect(selectedFavorite).toBeInTheDocument();
    expect(selectedFavorite).toHaveAttribute(
      'src',
      '/star-icon.svg',
    );
  });
  test('Teste do tipo', () => {
    renderWithRouter(<App />);
    const type = screen.getByTestId('pokemon-type', { name: /electric/i });
    expect(type).toBeInTheDocument();
    expect(type.innerHTML).toBe('Electric');
  });
});
