import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carSlice";

const carFormSlice = createSlice({
    name: "form",
    initialState: {
        name: "",
        cost: 0,
    },
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeCost: (state, action) => {
            state.cost = action.payload;
        },
    },

    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.cost = 0;
            state.name = "";
        });
    },
});

export const { changeCost, changeName } = carFormSlice.actions;
export const carFormReducer = carFormSlice.reducer;
