import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app without crashing', () => {
  render(<App />);
  // The app renders a search input for city lookup
  const searchInput = screen.getByPlaceholderText(/search a city/i);
  expect(searchInput).toBeInTheDocument();
});
