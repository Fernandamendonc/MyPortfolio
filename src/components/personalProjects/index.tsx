import { Container, Header } from './styles.ts'

import { Swiper, SwiperSlide } from 'swiper/react'

import Title from '../title/index.tsx'

import { personalProjects } from '../../db/personalProject.ts'
import ProjectCarousel from '../projectCarousel/index.tsx'
import { useEffect, useState } from 'react'

export default function PersonalProjects() {
  const [slidePreView, setSlidePreView] = useState(2)

  useEffect(() => {
    if (window.innerWidth > 1280) {
      setSlidePreView(3.3)
    }
    if (window.innerWidth < 300) {
      setSlidePreView(1)
    }

    /* window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    } */
  }, [])

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
        slidesPerView={slidePreView}
        spaceBetween={5}
        centeredSlides={true}
      >
        {personalProjects.map((personalProject) => (
          <SwiperSlide key={personalProject.id}>
            <ProjectCarousel personalProject={personalProject} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
