import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, Header } from './styles.ts'

import documentosGoogleImg from '../../assets/documentos-google.png'

import Title from '../title/index.tsx'
import Carousel, { ProjectType } from '../carousel/index.tsx'

const projects: ProjectType[] = [
  {
    id: 0,
    title: "dtmoney",
    description: "Essa aplicação tem o propósito de ajudar o usuário a ter o contole de suas finanças, cadastrando suas despesas e receitas. Os dados são salvos utilizando uma api fake, feita com o MirageJs.",
    img: "/src/assets/figma.svg"
  },
  {
    id: 1,
    title: "dtmoney",
    description: "Essa aplicação tem o propósito de ajudar o usuário a ter o contole de suas finanças, cadastrando suas despesas e receitas. Os dados são salvos utilizando uma api fake, feita com o MirageJs.",
    img: ""
  },
  {
    id: 2,
    title: "dtmoney",
    description: "Essa aplicação tem o propósito de ajudar o usuário a ter o contole de suas finanças, cadastrando suas despesas e receitas. Os dados são salvos utilizando uma api fake, feita com o MirageJs.",
    img: ""
  }
]

export default function Projects() {

  return (
    <Container>
      <Header>
        <Title icon={documentosGoogleImg} title={"projetos"}/>
        <p>Essa aplicação tem o propósito de ajudar o usuário a ter o controle de suas finanças, cadastrando suas despesas e receitas. Os dados são salvos utilizando uma api fake, feita com o MirageJs.</p>
      </Header>
      
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {
          projects.map((project) => (
            <SwiperSlide  key={project.id}>
              <Carousel project={project}/>
            </SwiperSlide>
            )
          )
        }
      </Swiper>
    </Container>
  )
}