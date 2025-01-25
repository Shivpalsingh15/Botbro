// 'use client';

import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from '@/redux/dashboardSlice'; // Import default reducer

export const store = configureStore({
    reducer: {
        dashboard: dashboardSlice // Use the default export
    },
});
