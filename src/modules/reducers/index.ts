// reducers/index.ts
import { combineReducers } from 'redux';
import profileStore from '../authentication/profileStore';
import testStore from '../test/testStore';
import recruitStore from '../recruit/recruitStore';

const rootReducer = combineReducers({
    profile: profileStore,
    test: testStore,
    recruit: recruitStore
});

export default rootReducer;