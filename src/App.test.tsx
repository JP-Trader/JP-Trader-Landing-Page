import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders the hero headline and both CTAs', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Building Smart Applications. Powering Digital Growth.',
    );
    expect(screen.getByRole('link', { name: /Explore Our Services/ })).toHaveAttribute('href', '#services');
    expect(screen.getAllByRole('link', { name: 'Start Your Project' }).length).toBeGreaterThan(0);
  });

  it('lists all seven services', () => {
    render(<App />);
    const section = document.getElementById('services')!;
    expect(section.querySelectorAll('article')).toHaveLength(7);
  });

  it('exposes company contact links', () => {
    render(<App />);
    expect(screen.getAllByRole('link', { name: 'info@jptrader.in' })[0]).toHaveAttribute('href', 'mailto:info@jptrader.in');
    expect(screen.getAllByRole('link', { name: '+91 99947 75475' })[0]).toHaveAttribute('href', 'tel:+919994775475');
  });

  it('shows validation errors and does not submit an empty form', async () => {
    render(<App />);
    await userEvent.click(screen.getByRole('button', { name: 'Send Inquiry' }));
    expect(await screen.findByText('Please enter your name.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
  });

  it('toggles the mobile menu', async () => {
    render(<App />);
    const toggle = screen.getByRole('button', { name: 'Open menu' });
    await userEvent.click(toggle);
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
  });
});
