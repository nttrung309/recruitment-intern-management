import { createReducer, PayloadAction, Selector } from '@reduxjs/toolkit';
import { RootState } from '..';
import { setStatusLogin, setLinkImage } from './actions';

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
    builder
        .addCase(setStatusLogin, (state, action: PayloadAction<boolean>) => {
            state.statusLogin = action.payload;
        })
        .addCase(setLinkImage, (state, action: PayloadAction<string>) => {
            state.linkImage = action.payload;
        });
});

export const StatusLoginSelector: Selector<RootState, boolean> = state => {
    return state.profile.statusLogin;
}

export default profileStore;