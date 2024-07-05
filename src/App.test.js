// Import necessary dependencies for testing
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { MeetupsProvider } from './services/store/MeetupsContext';

// Mock the Routes component
jest.mock('./services/routing', () => ({
  Routes: () => <div data-testid="mocked-routes">Mocked Routes</div>,
}));

describe('App component', () => {
  it('renders without crashing', () => {
    mount(
      <MeetupsProvider>
        <Router>
          <App />
        </Router>
      </MeetupsProvider>
    );
  });

  it('renders ToastContainer', () => {
    const wrapper = mount(
      <MeetupsProvider>
        <Router>
          <App />
        </Router>
      </MeetupsProvider>
    );
    expect(wrapper.find(ToastContainer)).toHaveLength(1);
  });

  it('renders mocked Routes component', () => {
    const wrapper = mount(
      <MeetupsProvider>
        <Router>
          <App />
        </Router>
      </MeetupsProvider>
    );
    expect(wrapper.find('[data-testid="mocked-routes"]')).toHaveLength(1);
  });
});
