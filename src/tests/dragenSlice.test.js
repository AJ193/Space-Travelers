import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { getDragons } from '../redux/dragons/dragonsSlice'; 

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('missionSlice', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch Dragons successfully and update state', async () => {
    const mockMissions = [{ id: 1, name: 'Dragon 1' }, { id: 2, name: 'Dragon 2' }];

    fetchMock.mockResponseOnce(JSON.stringify(mockMissions));

    const store = mockStore({ missions: { data: null, error: null } });

    // Dispatch the fetchMissions action and wait for it to complete
    await store.dispatch(getDragons());

    // Get the actions that were dispatched to the mock store
    const actions = store.getActions();

    // Expectations
    expect(actions[0].type).toEqual(getDragons.pending.type);
    expect(actions[1].type).toEqual(getDragons.fulfilled.type);
    expect(store.getState().missions.error).toBeNull();
  });

  // ... other test cases ...
});