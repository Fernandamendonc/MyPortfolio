import CountUp from 'react-countup'
import { summaryInformation } from '../../db/experience'
import BackgroundContact from '../../assets/img_ellipse.svg'
import {
  Container,
  SummaryInformation,
  SummaryInformationContent,
  SummaryInformationCount,
  SummaryInformationTitle,
  ContactInformation,
  ContactInformationHeader,
  ContactInformationTitle,
  ContactInformationSubtitle,
  ContactInformationButton,
  ContactInformationImg,
} from './styles'
import { useState } from 'react'
import ModalContact from '../modalContact'

export default function Contact() {
  const [isOpenModalContact, setIsOpenModalContact] = useState(false)

  function OpenModalContact() {
    setIsOpenModalContact(!isOpenModalContact)
  }

  return (
    <Container>
      <SummaryInformation>
        {summaryInformation.map((summaryInformation) => {
          return (
            <>
              <SummaryInformationContent>
                <SummaryInformationTitle>
                  {summaryInformation.title}
                </SummaryInformationTitle>

                <SummaryInformationCount>
                  <p>{summaryInformation.plus}</p>
                  <CountUp
                    end={summaryInformation.value}
                    duration={10}
                    key={summaryInformation.id}
                    enableScrollSpy={true}
                  ></CountUp>
                </SummaryInformationCount>
              </SummaryInformationContent>
            </>
          )
        })}
      </SummaryInformation>

      <ContactInformation>
        <ContactInformationHeader>
          <ContactInformationTitle>
            Vamos trabalhar juntos?
          </ContactInformationTitle>
          <ContactInformationSubtitle>
            Caso tenha interesse em algum projeto, me manda mensagem
          </ContactInformationSubtitle>
        </ContactInformationHeader>

        <ModalContact
          OpenModalContact={OpenModalContact}
          isOpenModalContact={isOpenModalContact}
        />

        <ContactInformationButton onClick={OpenModalContact}>
          Claro! vamos conversar
        </ContactInformationButton>

        <ContactInformationImg src={BackgroundContact} />
      </ContactInformation>
    </Container>
  )
}
