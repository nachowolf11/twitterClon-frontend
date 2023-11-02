import { Aside, Header, HomeMain, HeaderMobile } from "../components"
import { TwitterLayout } from "../layout/TwitterLayout"


export const HomePage = () => {

const header = <Header/>
const headerMobile = <HeaderMobile/>
const main = <HomeMain/>
const aside = <Aside/>
  
  return (
    <TwitterLayout 
      header={header}
      footer={headerMobile}
      main={main}
      aside={aside}
    />
  )
}
