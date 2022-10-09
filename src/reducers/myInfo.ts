import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserNum {
  userNum: number;
  userName: string;
  userId: string;
}

const myInfo = createSlice({
  name: 'myInfo',
  initialState: {
    userNum: -1,
    userName: '',
  },

  reducers: {
    updateUserNum: (state, action: PayloadAction<any>): IUserNum => ({
      ...state,
      userNum: action.payload.userNum,
      userName: action.payload.userName,
      userId: action.payload.userId,
    }),
  },
});

export const myInfoActions = myInfo.actions;
export default myInfo;
