import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const EachGamingLi = styled.li`
  width: 30%;
  margin: 6px;
  margin-bottom: 50px;
`

export const GamingImage = styled.img`
  width: 100%;
`

export const Gamingtitle = styled.p`
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isLightTheme ? '#000000' : '#ffffff')};
  margin-bottom: 0px;
`

export const GamingViweres = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: #94a3b8;
`
