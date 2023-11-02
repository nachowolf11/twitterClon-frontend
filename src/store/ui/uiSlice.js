import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isModalOpen: false,
        modalType:'',
        signupStep:'SignupOptions',
        isTweetModalOpen: false,
        deleteTweet:{
            isModalOpen: false,
            tweetID:'',
            funct:''
        }
    },
    reducers: {
        onOpenModal: ( state ) => {
            state.isModalOpen = true;
        },
        onCloseModal: ( state ) => {
            state.isModalOpen = false;
        },
        onSetModalType: ( state, { payload } ) => {
            state.modalType = payload
        },
        onSetSignupStep: ( state, { payload } ) => {
            state.signupStep = payload
        },
        onOpenTweetModal: ( state ) => {
            state.isTweetModalOpen = true;
        },
        onCloseTweetModal: ( state ) => {
            state.isTweetModalOpen = false;
        },
        onOpenDeleteTweetModal: ( state, { payload } ) => {
            state.deleteTweet.isModalOpen = true;
            state.deleteTweet.tweetID = payload.tweetID;
            state.deleteTweet.funct = payload.deleteTweet;
        },
        onCloseDeleteTweetModal: ( state ) => {
            state.deleteTweet.isModalOpen = false;
            state.deleteTweet.tweetID = '';
        },
    }
});


export const {
    onOpenModal,
    onCloseModal,
    onSetModalType,
    onSetSignupStep,
    onOpenTweetModal,
    onCloseTweetModal,
    onOpenDeleteTweetModal,
    onCloseDeleteTweetModal
 } = uiSlice.actions;