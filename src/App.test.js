import { render, screen } from '@testing-library/react';
import App from './App';
import { Label } from "./stories/Label/Label";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


describe("Label", () => {
  const label = 'Label';
  const type = 'yellow';

  it("Check label text", () => {
      render(<Label label={label} type={type}/>);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(label)).toHaveClass(type);
    expect(screen.getByText(label)).not.toHaveClass('grey');
  })
});
