import { createSlice } from "@reduxjs/toolkit";

const nameTrainerSlice = createSlice({
    name: "nameTrainer",
    initialState: localStorage.getItem("nameTrainer") ?? "",
    reducers: {
        setNameTrainerGlobal: (state, actions) => actions.payload
    }
})

export const { setNameTrainerGlobal } = nameTrainerSlice.actions

export default nameTrainerSlice.reducer