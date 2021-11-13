import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

jest.mock('../apis/kisiApi');
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

export default store;
