import * as thunks from '../thunks';

describe('thunks', () => {
  describe('setInitialState', () => {
    test('it resolves todos from local storage', async () => {
      const dispatch = jest.fn();
      const getState = jest.fn();
      //await thunks.setInitialState()(dispatch, getState, localStorage);
    });
  });
});
