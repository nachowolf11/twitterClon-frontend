import { createSlice } from '@reduxjs/toolkit';

export const tweetSlice = createSlice({
    name: 'tweet',
    initialState: {
        textToTweet: ''
    },
    reducers: {
        onChangeTextToTweet: (state, { payload } ) => {
            state.textToTweet = payload;
        },
    }
});


export const { onChangeTextToTweet } = tweetSlice.actions;