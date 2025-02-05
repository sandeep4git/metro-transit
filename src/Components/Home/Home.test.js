import { render, screen } from '@testing-library/react';
import { Home } from './Home'; // Make sure the path is correct for your project
import '@testing-library/jest-dom'; // For the "toBeInTheDocument" matcher

describe('Home Component', () => {
  
  it('renders the welcome heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /Welcome to Metro Transit App!/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the Bus section with correct text', () => {
    render(<Home />);
    const busTitle = screen.getByText("Bus");
    const busDescription = screen.getByText(/Buses are the backbone of the Metro Transit system/i);
    
    expect(busTitle).toBeInTheDocument();
    expect(busDescription).toBeInTheDocument();
  });

  it('renders the METRO section with buttons and description', () => {
    render(<Home />);
    const metroTitle = screen.getByText("METRO");
    expect(metroTitle).toBeInTheDocument();
  });

  it('renders the Northstar section with icon', () => {
    render(<Home />);
    const northstarTitle = screen.getByText("Northstar");
    expect(northstarTitle).toBeInTheDocument();
  });

  it('renders the Easy to pay section with icon', () => {
    render(<Home />);
    const easyToPayTitle = screen.getByText("Easy to pay"); 
    expect(easyToPayTitle).toBeInTheDocument();

  });

  it('renders the Bike section with icon', () => {
    render(<Home />);
    const bikeTitle = screen.getByText("Bring your bike!");
    expect(bikeTitle).toBeInTheDocument();
  });

  it('renders the Carpool section with icon', () => {
    render(<Home />);
    const carpoolTitle = screen.getByText("Become a registered carpooler");
    expect(carpoolTitle).toBeInTheDocument();
  });

  it('renders the Code of Conduct section with icon', () => {
    render(<Home />);
    const conductTitle = screen.getByText("Follow the code of conduct");
    expect(conductTitle).toBeInTheDocument();
  });
});
