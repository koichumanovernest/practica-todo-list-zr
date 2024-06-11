import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "./todoThunk";

const initialState = {
	todos: [],
	isLoading: false,
	error: false,
};

export const todoSlice = createSlice({
	name: "name",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getTodos.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTodos.fulfilled, (state, { payload }) => {
				state.todos = payload;
				state.isLoading = false;
			})
			.addCase(getTodos.rejected, (state) => {
				state.isLoading = false;
				state.error = true;
			});
	},
});
