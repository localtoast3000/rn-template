import { CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit';
import store from './store';

export type Store = ReturnType<typeof store.getState>;

export interface Slice<State> extends CreateSliceOptions {
  name: string;
  initialState: false | State;
  reducers: SliceCaseReducers<any>;
}
