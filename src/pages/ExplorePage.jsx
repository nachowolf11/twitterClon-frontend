import { ExploreMain, Header, HeaderMobile } from "../components"
import { TwitterLayout } from "../layout/TwitterLayout"


export const ExplorePage = () => {

const header = <Header/>
const main = <ExploreMain/>
const footer = <HeaderMobile/>

  return (
    <TwitterLayout header={ header } main={main} footer={footer}/>
  )
}
