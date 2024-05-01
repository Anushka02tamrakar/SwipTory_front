import { configureStore } from '@reduxjs/toolkit'
import authSlice from './components/auth/authSlice'
import modalSlice from './components/Modal/modalSlice'
import storyReducer from './components/story/storySlice';
import layoutReducer from './components/common/Layout/LayoutSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        modal: modalSlice,
        story: storyReducer,
        layout: layoutReducer,

    },
});
export default store;