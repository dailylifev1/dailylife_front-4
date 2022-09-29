import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPost {
  boardNum: number;
  content: string;
  heart: boolean;
  originalFileName: string[];
  serverFileUrl: string[];
  title: string;
  userName: string;
}
interface State {
  isLogoClicked: boolean;
  pageNum: number;
  myValues: IPost[];
}

const post = createSlice({
  name: 'post',
  initialState: {
    isLogoClicked: false,
    pageNum: 1,
    myValues: [] as IPost[],
  },
  reducers: {
    updateItems: (state, action: PayloadAction<IPost[]>): State => ({
      ...state,
      myValues: action.payload,
    }),
    updatePageNum: (state, action: PayloadAction<number>): State => ({
      ...state,
      pageNum: action.payload,
    }),
    updateIsLogoClicked: (state, action: PayloadAction<boolean>): State => ({
      ...state,
      isLogoClicked: action.payload,
    }),
  },
});

export const postActions = post.actions;
export default post;
