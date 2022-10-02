import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchResult {
  result: string;
}

const searchResult = createSlice({
  name: 'searchResult',
  initialState: {
    result: '',
  },
  reducers: {
    updateSearchedKeyword: (
      state,
      action: PayloadAction<string>,
    ): ISearchResult => ({ ...state, result: action.payload }),
  },
});

export const { updateSearchedKeyword } = searchResult.actions;
export default searchResult;
