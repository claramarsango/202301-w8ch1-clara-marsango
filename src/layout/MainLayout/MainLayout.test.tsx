import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';

describe('Given a main layout', () => {
  test('When there is a footer, it should appear on the page', () => {
    render(
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>,
    );

    const footer = screen.getByTestId('footer');

    expect(footer).toBeInTheDocument();
  });
});
