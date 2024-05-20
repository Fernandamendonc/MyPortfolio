import { Swiper, SwiperSlide } from 'swiper/react'

import { Container, Header } from './styles.ts'

import documentosGoogleImg from '../../assets/documentos-google.png'

import Title from '../title/index.tsx'
import Carousel, { ProjectType } from '../carousel/index.tsx'

const projects: ProjectType[] = [
  {
    id: 0,
    title: 'DTMONEY',
    description:
      'Essa aplicação tem o propósito de ajudar o usuário a ter o contole de suas finanças, cadastrando suas despesas e receitas. Os dados são salvos utilizando uma api fake, feita com o MirageJs.',
    img: '/src/assets/img_dtmoney.svg',
    colorBorder: '#8F01C2',
  },
  {
    id: 1,
    title: 'API RICK AND MORTY',
    description:
      'Essa aplicação tem o propósito de ajudar o usuário a ter o contole de suas finanças, cadastrando suas despesas e receitas. Os dados são salvos utilizando uma api fake, feita com o MirageJs.',
    img: '/src/assets/img_api_rick_morty.svg',
    colorBorder: '#69CC58',
  },
  {
    id: 2,
    title: 'MY TO DO LIST',
    description:
      'Essa aplicação tem o suas despesas e receitas. Os dados são salvos utilizando uma api fake, feita com o MirageJs.',
    img: '/src/assets/img_api_rick_morty.svg',
    colorBorder: '#0500FF',
  },
]

export default function Projects() {
  return (
    <Container>
      <Header>
        <Title icon={documentosGoogleImg} title={'projetos'} />
        <p>
          Essa aplicação tem o propósito de ajudar o usuário a ter o controle de
          suas finanças, cadastrando suas despesas e receitas. Os dados são
          salvos utilizando uma api fake, feita com o MirageJs.
        </p>
      </Header>

      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Carousel project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
