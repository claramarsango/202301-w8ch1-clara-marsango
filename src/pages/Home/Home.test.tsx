import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Given a home page', () => {
  test('When there is a header, it should appear on the page', () => {
    render(<Home />);
    const title = screen.getByRole('heading');
    expect(title).toBeInTheDocument();
  });
});
