import { createAction } from '@reduxjs/toolkit';

export const setSelectedTestId = createAction<string>('testStore/setSelectedTestId');

export const setDoingQuesId = createAction<number>('testStore/setDoingQuesId');

export const setUserAnswer = createAction<any[]>('testStore/setUserAnswer');

export const setCurrentQuestion = createAction<any[]>('testStore/setCurrentQuestion');