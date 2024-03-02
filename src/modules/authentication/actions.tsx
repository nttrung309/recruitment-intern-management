import { createAction } from '@reduxjs/toolkit';

export const setStatusLogin = createAction<boolean>('profileStore/setStatusLogin');

export const setLinkImage = createAction<string>('profileStore/setLinkImage');