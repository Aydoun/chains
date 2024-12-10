import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Collection } from '../lib/definitions';
import axios from 'axios';

interface CollectionsState {
  collections: Collection[];
  loading: boolean;
  error: string | null;
}

const initialState: CollectionsState = {
  collections: [],
  loading: false,
  error: null,
};

// Async thunk for fetching collections
export const fetchCollections = createAsyncThunk(
  'collections/fetchCollections',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/collections'); // Replace with your API route
      return response.data as Collection[];
    } catch (error: any) {
      return rejectWithValue(error.response.data || 'Error fetching collections');
    }
  }
);

const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCollections.fulfilled, (state, action: PayloadAction<Collection[]>) => {
        state.loading = false;
        state.collections = action.payload;
      })
      .addCase(fetchCollections.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default collectionsSlice.reducer;
