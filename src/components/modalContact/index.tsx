import NavSocialMidia from '../navSocialMidia'
import Modal from 'react-modal'
import {
  Container,
  ContainerSendCancel,
  ButtonCancel,
  ButtonSendEmail,
} from './styles'
import { useState } from 'react'

import emailjs from '@emailjs/browser'

interface ModalContactPropos {
  ToggleModalContact: () => void
  isOpenModalContact: boolean
}

export default function ModalContact({
  ToggleModalContact,
  isOpenModalContact,
}: ModalContactPropos) {
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmitEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (email === '' || message === '') {
      alert('preencha todos os campos')
    } else {
      const templateParams = {
        from_name: email,
        email,
        message,
      }
      emailjs
        .send(
          'service_6z428hh',
          'template_swqqb3m',
          templateParams,
          '7XR2ngC-wruJREWWm',
        )
        .then(
          (response) => {
            console.log(
              'email enviado com sucesso',
              response.status,
              response.text,
            )
            setEmail('')
            setMessage('')
          },
          (error) => {
            console.log('falhou', error)
          },
        )
      ToggleModalContact()
    }
  }

  return (
    <Modal
      isOpen={isOpenModalContact}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <NavSocialMidia />
      <Container onSubmit={handleSubmitEmail}>
        <label>E-mail</label>
        <input
          placeholder={'exemplo@email.com.br'}
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Mensagem</label>
        <textarea
          placeholder={'Escreva sua mensagem aqui...'}
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ContainerSendCancel>
          <ButtonCancel onClick={ToggleModalContact}>Cancelar</ButtonCancel>
          <ButtonSendEmail value="enviar" type="submit">
            Enviar
          </ButtonSendEmail>
        </ContainerSendCancel>
      </Container>
    </Modal>
  )
}
