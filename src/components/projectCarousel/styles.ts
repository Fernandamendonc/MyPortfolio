import styled from 'styled-components'
export interface ContainerProps {
  readonly colorBorder: string
}

export const Container = styled.div<ContainerProps>`
  border: 1px solid var(--gray-20);
  border-radius: 20px;

  padding: 15px;

  max-width: 340px;

  height: 490px;
`

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 20px;
`
export const ContentImg = styled.div`
  img {
    width: 340px;
  }
`
export const Title = styled.div<ContainerProps>`
  color: ${(props) => props.colorBorder};
  font-weight: 700;
  font-size: 22px;
`
export const Description = styled.div`
  height: 130px;
  color: white;
  font-weight: lighter;
`
