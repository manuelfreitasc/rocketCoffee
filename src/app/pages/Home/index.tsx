import { Banner } from '../../Components/Banner'
import { Header } from '../../Components/Header'
import { Main } from '../../Components/Main'
import './styles.css'


function Home() {
  return (
    <div className="home-container">
      <Header />
      <Banner title="Great Coffee" />
      <Main />
    </div>
  )
}
export { Home }