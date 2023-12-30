import { Container, Wrapper } from './styles/App'
import Header from './components/header'
import Introduction from './components/introduction'
import HardSkills from './components/hardskills'
import Projetos from './components/projects'

function App() {

  return (
    <>
    <Container>
      <Wrapper>
        <Header />
        <Introduction/>
      </Wrapper>
      <HardSkills />
      <Projetos />
    </Container>
    </>
  )
}

export default App
