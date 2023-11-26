import Title from '../title'

import iconPerson from '../../assets/iconPerson.svg'
import { Container } from './styles'

export default function AboutMe() {

  return (
    <>
    <Container>
      <Title icon={iconPerson} title='sobre mim'/>
      <span>
        Estudante e amante da área da tecnologia, 
        com o propósito de desenvolver minhas habilidades interpessoais e 
        técnicas de desenvolvimento de software. Minha motivação é me tornar uma profissional 
        cada vez mais completa, buscando sempre o crescimento pessoal e profissional, 
        para acrescentar positivamente em qualquer atividade que eu esteja inserida. 
        Bacharelando Sistemas de Informação, criando aplicações de forma autônoma, 
        em busca de desafios, trabalhando com carisma, vontade e paixão.
      </span>
    </Container>
    </>
  )
}