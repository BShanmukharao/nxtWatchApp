import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const MeniOptionsContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 89vh;
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#181818')};
`
export const UlMenuOptions = styled.ul`
  list-style-type: none;
  padding: 0px;
`
export const EachNavItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isActive ? '#f1f5f9' : null)};
`
export const EachNavItemName = styled.p`
  color: ${props => (props.isLightTheme ? '#181818' : '#f9f9f9')};
  font-size: ${props => (props.isActive ? '16px' : '14px')};
  font-family: 'Roboto';
  font-weight: ${props => (props.isActive ? 'bold' : 500)};
  margin-left: 7px;
`
export const MenuOptionBelowContainer = styled.div`
  padding: 0px 15px 20px 15px;
`
export const SocialMediaIcon = styled.img`
  width: 35px;
  margin-right: 14px;
`

export const ContactUsParagraph = styled.p`
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#1e293b' : '#ffffff')};
`

export const EnjoyParagraph = styled.p`
  font-weight: bold;
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#1e293b' : '#ffffff')};
  font-size: 17px;
  line-height: 1.5;
`

export const NavIconButton = styled.button`
  color: ${props => (props.isActive ? '#ff0000' : '')};
  border-width: 0px;
  background-color: transparent;
`
