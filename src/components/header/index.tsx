import logoFImg from '../../assets/ic_logo.svg'

import { Container, CircleLogo, Logo } from './styles.ts'
import NavSocialMidia from '../navSocialMidia/index.tsx'
import ModalContact from '../modalContact/index.tsx'
import { useState } from 'react'
import ButtonContact from '../buttonContact/index.tsx'

export default function Header() {
  const [isOpenModalContact, setIsOpenModalContact] = useState(false)

  function ToggleModalContact() {
    setIsOpenModalContact(!isOpenModalContact)
  }
  return (
    <Container>
      <CircleLogo>
        <Logo>
          <img src={logoFImg} alt="Logo" width={'16px'} />
          <strong>fernanda.</strong>
        </Logo>
        <ButtonContact openModal={ToggleModalContact} />
      </CircleLogo>

      <NavSocialMidia />
      <ModalContact
        ToggleModalContact={ToggleModalContact}
        isOpenModalContact={isOpenModalContact}
      />
    </Container>
  )
}
