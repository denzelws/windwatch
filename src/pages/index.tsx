import BannerSection from 'components/BannerSection'
import { Container } from 'components/Container'
import ContentSection from 'components/ContentSection'
import Navbar from 'components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <BannerSection />
        <ContentSection />
      </Container>
    </>
  )
}

export default Home
