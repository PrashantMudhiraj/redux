import { configureStore } from "@reduxjs/toolkit";
import {
    carReducer,
    changeSearchTerm,
    addCar,
    removeCar,
} from "./store/carSlice";

import { changeCost, changeName, carFormReducer } from "./store/carFromSlice";

const appStore = configureStore({
    reducer: {
        cars: carReducer,
        form: carFormReducer,
    },
});

export {
    appStore,
    changeCost,
    changeName,
    changeSearchTerm,
    addCar,
    removeCar,
};
