import { ToastContainer } from "react-toastify"
import { CreateTweetModal, DeleteTweetModal, ModalTwitter } from "./components"
import { TweetProvider } from "./context/TweetContext"
import { TwitterRouter } from "./router/TwitterRouter"
import { AppTheme } from "./theme/AppTheme"
import 'react-toastify/dist/ReactToastify.css';

export const Twitter = () => {
  return (
    <TweetProvider>
      <AppTheme>
        <TwitterRouter/>
        <ModalTwitter/>
        <CreateTweetModal/>
        <DeleteTweetModal/>
        <ToastContainer/>
      </AppTheme>
    </TweetProvider>
  )
}
