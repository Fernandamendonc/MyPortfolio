import styled from 'styled-components'
export interface ContainerProps {
  readonly colorBorder: string
}

export const Container = styled.div<ContainerProps>`
  cursor: pointer;

  border: 3px solid ${(props) => props.colorBorder};
  border-radius: 30px;

  padding: 44px 34px;

  gap: 30px;

  cursor: pointer;

  height: 490px;

  display: flex;
  flex-direction: column;
  align-items: end;
`

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 20px;
`
export const ContentImg = styled.div`
  img {
    width: 100%;
  }
`
export const Title = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;

  padding: 5px 10px;

  color: ${(props) => props.colorBorder};
  font-weight: 700;

  border: 3px solid ${(props) => props.colorBorder};
  border-radius: 30px;
`
export const Description = styled.div`
  height: 130px;
`
