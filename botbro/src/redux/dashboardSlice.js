 'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSideBar: false,
    theme : localStorage.getItem("theme") || "light"

};

const dashboardSlice = createSlice({
    name: 'Dashboard',
    initialState,  
    reducers: {
        setShowSideBar(state, action) {
            state.showSideBar = action.payload;
        },
        setTheme(state, action) {
            state.theme = action.payload;
            localStorage.setItem("theme", action.payload); // Persist theme to localStorage
          },
    }
});

export const { setShowSideBar, setTheme } = dashboardSlice.actions;

export default dashboardSlice.reducer;
