import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UsersRouted from './UsersRouted';

describe('<UsersRouted />', () => {
  test('it should mount', () => {
    render(<UsersRouted />);
    
    const usersRouted = screen.getByTestId('UsersRouted');

    expect(usersRouted).toBeInTheDocument();
  });
});