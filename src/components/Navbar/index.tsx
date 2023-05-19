import * as S from './styles'

const logoicon = '/img/tornadologo.png'

const Navbar = () => (
  <S.Wrapper>
    <S.Logo>
      <img
        src={logoicon}
        width={30}
        height={18}
        alt="the icon shows a blue tornado that represents the brand"
      />
      <span>WindWatch</span>
    </S.Logo>

    <S.NavBox>
      <h2>Research</h2>
      <h2>Service</h2>
      <h2>Climate</h2>
      <h2>About Us</h2>
    </S.NavBox>

    <button>Entre</button>
  </S.Wrapper>
)

export default Navbar
