import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

describe('Given a main layout', () => {
  test('', () => {
    render(
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>,
    );

    const footer = screen.getByTestId('footer');

    expect(footer).toBeInTheDocument();
  });
});
