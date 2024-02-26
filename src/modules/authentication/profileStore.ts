import { createReducer, Selector } from '@reduxjs/toolkit';
import { RootState } from '..';
interface IStore {
    statusLogin: boolean;
    listPermissionCode?: Array<string>;
    linkImage?: string;
    token?: string;
    refreshToken?: string;
    remember: boolean;
}
  
const initialState: IStore = {
    statusLogin: false,
    remember: false
};

const profileStore = createReducer(initialState, (builder) => {
    // Xử lý các action ở đây nếu cần
});

export const StatusLoginSelector: Selector<RootState, boolean> = state => {
    return state.profile.statusLogin;
}

export default profileStore;