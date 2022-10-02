import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IKebabModal {
  isOpen: boolean;
}

const kebabModal = createSlice({
  name: 'kebabModal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    updateModalStatus: (
      state,
      action: PayloadAction<boolean>,
    ): IKebabModal => ({ ...state, isOpen: action.payload }),
  },
});

export const { updateModalStatus } = kebabModal.actions;

export default kebabModal;
