import { Container, Header } from './styles.ts'

import { Swiper, SwiperSlide } from 'swiper/react'

import Title from '../title/index.tsx'
import Carousel from '../carousel/index.tsx'

import { personalProjects } from '../../db/personalProject.ts'

export default function PersonalProjects() {
  return (
    <Container>
      <Header>
        <Title title={'projetos'} />
        <p>
          Aqui, você encontrará uma coleção de projetos que desenvolvi ao longo
          dos anos, refletindo minha curiosidade, dedicação e aprendizado
          contínuo. Os projetos variam de pequenas ferramentas a aplicações
          complexas, criados para resolver problemas, automatizar tarefas ou
          explorar novas ideias.
        </p>
      </Header>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        centeredSlides={true}
      >
        {personalProjects.map((personalProject) => (
          <SwiperSlide key={personalProject.id}>
            <Carousel personalProject={personalProject} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
