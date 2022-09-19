import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Teste Not Found', () => {
  test('Teste h2', () => {
    renderWithRouter(<NotFound />);
    const notFound = screen.getByRole('heading', {
      name: 'Page requested not found',
      level: 2,
    });
    expect(notFound).toBeInTheDocument();
  });
  test('Teste Imagem', () => {
    renderWithRouter(<NotFound />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    );
  });
});
