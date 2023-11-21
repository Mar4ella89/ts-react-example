import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './components/App';

import { User } from './components/App/App.types';

const user: User = {
  id: 1,
  name: 'Marat',
  email: 'test@example.com'
}

test('renders learn react link', () => {
  render(<App user={ user} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
