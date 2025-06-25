import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../src/app/components/Nav/Navbar';

// Mock next/link to render children directly
jest.mock('next/link', () => {
  return ({ children, href }) => <a href={href}>{children}</a>;
});

// Mock Logo component
jest.mock('../src/app/elements/Logo/logo', () => () => <div>HEXASHOP</div>);

// Mock Button component
jest.mock('../src/app/elements/Button/Button', () => () => <button>Logout</button>);

// Mock DarkModeToggle
jest.mock('../src/app/components/DarkModeToggle/DarkModeToggle', () => () => <div>DarkModeToggle</div>);

describe('Navbar', () => {
  it('renders navigation links and logo', () => {
    render(<Navbar />);
    expect(screen.getByText('HEXASHOP')).toBeInTheDocument();
    expect(screen.getByText('about')).toBeInTheDocument();
    expect(screen.getByText('portfolio')).toBeInTheDocument();
    expect(screen.getByText('blog')).toBeInTheDocument();
    expect(screen.getByText('contact')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(screen.getByText('DarkModeToggle')).toBeInTheDocument();
  });
});
