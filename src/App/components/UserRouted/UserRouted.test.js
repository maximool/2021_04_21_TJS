import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserRouted from './UserRouted';

describe('<UserRouted />', () => {
  test('it should mount', () => {
    render(<UserRouted />);
    
    const userRouted = screen.getByTestId('UserRouted');

    expect(userRouted).toBeInTheDocument();
  });
});