import { Banner } from '../../Components/Banner'
import { Header } from '../../Components/Header'
import './styles.css'


function Home() {
  return (
    <div className="container">
      <Header />
      <Banner title="nelo" code="dois" />
    </div>
  )
}
export { Home }