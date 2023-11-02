import { useEffect } from "react"
import { useUiStore } from "../hooks"

export const LoginPage = () => {  

  const { openModal, setModalType } = useUiStore();

  useEffect(() => {
    setModalType('login')
    openModal();
  }, [])
  
  return (
    <>
    </>
  )
}
