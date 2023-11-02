import { Footer, Header, HeaderLogout, HeaderMobile, UserMain } from "../components"
import { useAuthStore } from "../hooks"
import { TwitterLayout } from "../layout/TwitterLayout"

export const UserPage = () => {

  const { status } = useAuthStore();

  const header = status === 'authenticated' ? <Header/> : <HeaderLogout/>
  const main = <UserMain/>
  const footer = status === 'not-authenticated' ? <Footer/> : <HeaderMobile/>
  
  return (
    <>
    <TwitterLayout header={ header } main={main} footer={footer}/>
    </>
  )
}