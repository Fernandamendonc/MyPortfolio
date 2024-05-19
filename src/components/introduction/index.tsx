import {
  Container,
  Introducao,
  ButtonProjetos,
  TextoNome,
  TextoSobrenome,
} from './styles'
import icChaveAbertaImg from '../../assets/ic_chave_aberta.svg'
import icChaveFechadaImg from '../../assets/ic_chave_fechada.svg'

export default function Introduction() {
  return (
    <Container>
      <Introducao>
        <img src={icChaveAbertaImg} alt="chave aberta" width={'5px'} />

        <p>Olá, eu sou a</p>
        <TextoNome>Fernanda</TextoNome>
        <TextoSobrenome>Mendonça.</TextoSobrenome>

        <img src={icChaveFechadaImg} alt="chave fechada" width={'5px'} />

        <ButtonProjetos>Veja meus projetos</ButtonProjetos>
      </Introducao>

      <span>
        Estudante e amante da área da tecnologia, com o propósito de desenvolver
        minhas habilidades interpessoais e técnicas de desenvolvimento de
        software. Minha motivação é me tornar uma profissional cada vez mais
        completa, buscando sempre o crescimento pessoal e profissional, para
        acrescentar positivamente em qualquer atividade que eu esteja inserida.
        Bacharelando Sistemas de Informação, criando aplicações de forma
        autônoma, em busca de desafios, trabalhando com carisma, vontade e
        paixão.
      </span>
    </Container>
  )
}
