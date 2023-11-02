import { AsideLogout, Footer, HeaderLogout, HeaderMobileLogout, MainLogout } from "../components"
import { TwitterLayout } from "../layout/TwitterLayout"

export const PublicPage = () => {
  
  const header = <HeaderLogout/>
  const headerMobile = <HeaderMobileLogout/>
  const main = <MainLogout/>
  const aside = <AsideLogout/>
  const footer = <Footer/>

  return (
    <>
      <TwitterLayout
        header={ header }
        headerMobile={ headerMobile }
        main={ main }
        aside={ aside }
        footer={footer} 
      />
    </>
  )
}
