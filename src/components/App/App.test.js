import { render, screen } from '@testing-library/react';
import App from './App.js';

// jest.config.js
// Or async function
module.exports = async () => {
  return {
    verbose: true,
  };
};


test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
