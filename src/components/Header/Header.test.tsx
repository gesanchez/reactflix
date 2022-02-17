import { render, screen } from '@testing-library/react';
import Header from './index';

describe("Header Component", () => {
  test("Should render the header", () => {
    render(<Header />);
    const ReactElement = screen.getByText(/React/i);
    expect(ReactElement).toBeInTheDocument();

    const FlixElement = screen.getByText(/Flix/i);
    expect(FlixElement).toBeInTheDocument();
  });
});