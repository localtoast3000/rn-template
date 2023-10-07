import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { Slice, Store } from '../types';

interface User {
  firstname: string;
  lastname: string;
  email: string;
  tokens: {
    refresh: string;
    access: string;
  };
}

const sliceOptions: Slice<User> = {
  name: 'user',
  initialState: false,
  reducers: {
    mountUser: (state, action: PayloadAction<User>) => {
      state = action.payload;
    },
    dismountUser: (state) => {
      state = false;
    },
  },
};

const user = createSlice(sliceOptions);

export const useUserData = () => useSelector((store: Store) => store.user);

export const useUserActions = () => {
  const dispatch = useDispatch();
  return {
    mountUser(userData: User) {
      dispatch(user.actions.mountUser(userData));
    },
    dismountUser() {
      dispatch(user.actions.dismountUser(false));
    },
  };
};

export default user.reducer;
