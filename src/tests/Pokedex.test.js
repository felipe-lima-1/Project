import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste Pokedex', () => {
  test('Teste Filtragem', () => {
    renderWithRouter(<App />);
    const typesOfPokemons = ['Electric', 'Fire', 'Bug', 'Poison',
      'Psychic', 'Normal', 'Dragon'];
    const buttonArray = screen.getAllByTestId('pokemon-type-button');
    buttonArray.forEach((element, index) => {
      expect(element).toHaveTextContent(typesOfPokemons[index]);
    });
  });
  test('Teste botao All', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: /all/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });
});
