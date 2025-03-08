import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: "cars",
    initialState: {
        searchTerm: "",
        data: [],
    },

    reducers: {
        changeSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        addCar: (state, action) => {
            state.data.push({ ...action.payload, id: nanoid() });
        },
        removeCar: (state, action) => {
            state.data = state.data.filter((car) => car.id !== action.payload);
        },
    },
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carReducer = carSlice.reducer;
