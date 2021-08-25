import React from 'react';
import renderWithRouter from './renderWithRouter';
import { render, screen } from '@testing-library/react';
import App from './App';

test('deve renderizar o componente App', () => {
  const { getByText } = renderWithRouter(<App />);
  const home = getByText(/Você está na página Início/);
  expect(home).toBeInTheDocument();
});

const { getByText } = render(<App />);