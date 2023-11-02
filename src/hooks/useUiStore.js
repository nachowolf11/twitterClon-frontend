import { useDispatch, useSelector } from "react-redux";
import { onCloseDeleteTweetModal, onCloseModal, onCloseTweetModal, onOpenDeleteTweetModal, onOpenModal, onOpenTweetModal, onSetModalType, onSetSignupStep } from "../store"

export const useUiStore = () => {

    const { isModalOpen, modalType, signupStep, isTweetModalOpen, deleteTweet } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const openModal = () => {
        dispatch( onOpenModal() );
    }

    const closeModal = () => {
        dispatch( onCloseModal() );
        setTimeout(() => {
            dispatch( onSetSignupStep('SignupOptions') )
        }, 200);
    }

    const setModalType = (payload) => {
        dispatch( onSetModalType(payload) );
    }

    const setSignupStep = (payload) => {
        dispatch( onSetSignupStep(payload) );
    }

    const openTweetModal = () => {
        dispatch( onOpenTweetModal() );
    }

    const closeTweetModal = () => {
        dispatch( onCloseTweetModal() );
    }

    const openDeleteTweetModal = (tweetID) => {
        dispatch( onOpenDeleteTweetModal(tweetID) );
    }

    const closeDeleteTweetModal = () => {
        dispatch( onCloseDeleteTweetModal() );
    }

    return{
        // Propiedades
        isModalOpen,
        modalType,
        signupStep,
        isTweetModalOpen,
        deleteTweet,

        // Metodos
        openModal,
        closeModal,
        setModalType,
        setSignupStep,
        openTweetModal,
        closeTweetModal,
        openDeleteTweetModal,
        closeDeleteTweetModal
    }
}