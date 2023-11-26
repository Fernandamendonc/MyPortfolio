import { Container, Wrapper } from './styles/App'
import AboutMe from './components/aboutMe'
import Header from './components/header'
import Introduction from './components/introduction'
import HardSkills from './components/hardskills'

function App() {

  return (
    <>
    <Container>
      <Wrapper>
        <Header />
        <Introduction/>
        <AboutMe />
      </Wrapper>
      <HardSkills />
    </Container>
    </>
  )
}

export default App
