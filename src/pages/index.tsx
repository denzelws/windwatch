import BannerSection from 'components/BannerSection'
import { Container } from 'components/Container'
import ContentSection from 'components/ContentSection'
import Navbar from 'components/Navbar'

export default function Home() {
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
