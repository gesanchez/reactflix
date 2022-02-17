import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom'
import Main from './index';


describe('Main Component', () => {
  test('Should render and contain movie component', async () => {
    render(<Main />);
    const movieContainer =  await screen.findByTestId('movies')
    expect(movieContainer).toBeInTheDocument();
  });
});
