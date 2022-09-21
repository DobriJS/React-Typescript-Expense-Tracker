import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import TaskService from '../services/task.services';
import { TaskProps } from '../interfaces';

const initialState: TaskProps[] = [
  {
    id: null,
    title: '',
    description: '',
    published: false
  }
];

export const getAllTasks = createAsyncThunk('tasks/getAll', async () => {
  const res = await TaskService.getAll();
  return res.data;
});

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllTasks.fulfilled,
      (state, action: PayloadAction<TaskProps[]>) => {
        return [...action.payload];
      }
    );
  }
});
