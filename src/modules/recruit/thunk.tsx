import { createSlice, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { collection, addDoc, getDocs } from 'firebase/firestore';

import app from 'src/firebase';
import { db } from 'src/firebase';

export const FetchRecruitData = createAsyncThunk(
    'recruit/FetchData',
    async () => {
      try {
        // Lấy dữ liệu mới từ Firestore
        const querySnapshot = await getDocs(collection(db, 'recruit'));
        const recruits: any[] = [];
        querySnapshot.forEach((doc) => {
          recruits.push(doc.data());
        });
        
        // Trả về dữ liệu mới
        return recruits;
      } catch (error: any) {
        // Xử lý lỗi nếu có
        throw new Error(error.message);
      }
    }
);