import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 40px 0px;

  span {
    text-align: end;
    width: 680px;

    font-size: 12px;
  }
`
export const Introducao = styled.div`
  display: flex;
  flex-direction: column;

  color: white;

  p {
    color: var(--purple-10);
    margin: 0;

    font-size: 12px;
    font-weight: 200;
  }
`
export const TextoNome = styled.div`
  font-size: 64px;
  height: 60px;
  margin: 0;
  font-weight: 900;
`
export const TextoSobrenome = styled.div`
  font-size: 64px;
  height: 80px;
  margin: 0;
`
export const ButtonProjetos = styled.div`
  margin-top: 30px;
  padding: 7px 10px;
  cursor: pointer;

  font-size: 12px;

  border: 1px solid #5f5f5f;
  border-radius: 30px;

  max-width: 130px;

  display: flex;
  align-items: center;
  justify-content: center;
`
