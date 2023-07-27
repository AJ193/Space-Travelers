import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missions from '../components/missions/Missions';
import Rockets from '../components/Rockets';
import Profile from '../components/Profile';
import Dragon from '../components/Dragon';

describe('Component testing', () => {
  test('Mission component should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Missions />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Rocket component should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Rockets />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Profile component should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Profile />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Dragon component should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Dragon />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
