import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';  // Wrap with MemoryRouter to use react-router
import NavBar from './Navbar';

describe('NavBar', () => {
  it('renders NavBar correctly', () => {
    render(
      <NavBar />
    );

    // Test for the presence of the Metro Transit text
    expect(screen.getByText(/Metro Transit/i)).toBeInTheDocument();

    // Test for the presence of the Home link
    expect(screen.getByText(/Home/i)).toBeInTheDocument();

    // Test for the presence of the Next Trips link
    expect(screen.getByText(/Next Trips/i)).toBeInTheDocument();

    // Test for the SVG icon rendering (check if the path is present)
    const svgIcon = screen.getByTitle(/circle-red-white-t/i);
    expect(svgIcon).toBeInTheDocument();
    
    // Test for the navbar toggler button
    const navbarToggler = screen.getByRole('button', { name: /toggle navigation/i });
    expect(navbarToggler).toBeInTheDocument();
  });

  it('clicking the Home link navigates to the correct route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavBar />
      </MemoryRouter>
    );

    const homeLink = screen.getByText(/Home/i);
    fireEvent.click(homeLink);

    // Assert the expected navigation
    expect(window.location.pathname).toBe('/');
  });

  it('clicking the Next Trips link navigates to the correct route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavBar />
      </MemoryRouter>
    );

    const nextTripsLink = screen.getByText(/Next Trips/i);
    fireEvent.click(nextTripsLink);

    // Assert the expected navigation
    expect(window.location.pathname).toBe('/nextTrips');
  });
});
