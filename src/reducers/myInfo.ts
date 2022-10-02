import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserNum {
  userNum: number;
}

const myInfo = createSlice({
  name: 'myInfo',
  initialState: {
    userNum: -1,
  },

  reducers: {
    updateUserNum: (state, action: PayloadAction<number>): IUserNum => ({
      ...state,
      userNum: action.payload,
    }),
  },
});

export const myInfoActions = myInfo.actions;
export default myInfo;
