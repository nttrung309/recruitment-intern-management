// reducers/index.ts
import { combineReducers } from 'redux';
import profileStore from '../authentication/profileStore';
import testStore from '../test/testStore';

const rootReducer = combineReducers({
    profile: profileStore,
    test: testStore
});

export default rootReducer;