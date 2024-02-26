// reducers/index.ts
import { combineReducers } from 'redux';
import profileStore from '../authentication/profileStore';

const rootReducer = combineReducers({
    profile: profileStore,
});

export default rootReducer;