import { useUiStore } from "../hooks"
import { SignupOptions, Terms, CreateAccount, Password, EditProfile } from "./"

export const ModalSignup = ({onCloseModal}) => {

const { signupStep } = useUiStore();

const displaySteps = (step) => {
    switch (step) {
        case 'SignupOptions':
            return <SignupOptions onCloseModal={onCloseModal}/>
        case 'CreateAccount':
            return <CreateAccount onCloseModal={onCloseModal}/>            
        case 'Terms':
            return <Terms/>
        case 'Password':
          return <Password/>    
        case 'EditProfile':
          return <EditProfile onCloseModal={onCloseModal}/>        
    }
}

  return (
    <>
    {displaySteps(signupStep)}
    </>
  )
}
