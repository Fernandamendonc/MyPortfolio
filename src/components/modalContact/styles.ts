import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  gap: 10px;

  input,
  textarea {
    width: 95%;
    padding: 5px 10px;
    font-size: 16px;
  }
  input {
    height: 38px;
  }
  textarea {
    resize: none;
  }
`
export const ContainerSendCancel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;

  margin-top: 1rem;
`
export const ButtonSendEmail = styled.button`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 0px;
  border-radius: 4px;

  background-color: var(--purple-20);
  cursor: pointer;
`
export const ButtonCancel = styled.button`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  color: var(--purple-20);
`
