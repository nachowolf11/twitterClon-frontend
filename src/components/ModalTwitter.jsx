import { Box } from "@mui/material";
import { useUiStore } from "../hooks";
import Modal from "react-modal";
import '../styles/authModal.css'
import { ModalLogin } from "./ModalLogin";
import { ModalSignup } from "./ModalSignup";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
    },
  };

Modal.setAppElement('#root');

export const ModalTwitter = () => {
  
  const { closeModal, isModalOpen, modalType } = useUiStore();

  const onCloseModal = () => {
    closeModal();
    if(window.location.href.includes('login') && modalType === 'login'){
      window.location.href = '/';
    }
  }

  return (
    <Modal
    isOpen={ isModalOpen }
    onRequestClose={ onCloseModal }
    style={ customStyles }
    className="modal"
    overlayClassName="modal-fondo"
    shouldCloseOnOverlayClick={false}
    shouldCloseOnEsc={false}
    closeTimeoutMS={ 200 }
    > 
        <Box display="flex" flexDirection="column" height="650px">

            {
              modalType === 'login'
              ? <ModalLogin onCloseModal={onCloseModal}/>
              : <ModalSignup onCloseModal={onCloseModal}/>
            }

        </Box>

  </Modal>
  )
}
