import { createReducer, PayloadAction, Selector } from '@reduxjs/toolkit';
import { RootState } from '..';
import { FetchRecruitData } from './thunk';

interface IStore {
    recruitData : any[],
    status: string,
    error: any
}

const initialState: IStore = {
    recruitData: [],
    status: 'idle',
    error: null,
};

const recruitStore = createReducer(initialState, (builder) => {
    builder
        .addCase(FetchRecruitData.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(FetchRecruitData.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.recruitData = action.payload;
        })
        .addCase(FetchRecruitData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
});

export default recruitStore;