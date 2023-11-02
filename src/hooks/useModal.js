import { useEffect, useState } from "react";

export const useModal = ( ref ) => {
    const [modal, setModal] = useState('none')

    const onClick = () => {
      modal === 'none' ? setModal('flex') : setModal('none')
    }
  
    useEffect(() => {
      const checkIfClickedOutside = (e) => {
        if( modal === 'flex' && ref.current && !ref.current.contains(e.target) ){
          onClick();
        }
      };
      modal !== 'none' && document.addEventListener("click", checkIfClickedOutside); 
      return () => {
        document.removeEventListener("click", checkIfClickedOutside);
      }
    }, [modal])

    return{
        onClick,
        modal
    }
}