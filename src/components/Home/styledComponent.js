import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const HomeContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#f0f0f0' : '#181818')};
`

export const MenuOptionAndVideosContainer = styled.div`
  display: flex;
  height: 89vh;
`

export const VideosAndBannerContainer = styled.div`
  width: 80%;
  overflow-y: auto;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 10px 20px 30px 20px;
`

export const WebsiteLogo = styled.img`
  width: 130px;
`
export const WebsiteLogoAndCloseButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`

export const BannerDescription = styled.p`
  width: 55%;
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 1.5;
`

export const BannerButton = styled.button`
  padding: 10px 15px 10px 15px;
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 14px;
`

export const VideosAndSearchContainer = styled.div`
  padding: 20px 20px 20px 20px;
  max-height: 100%;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  min-width: 350px;
  padding: 6px 10px 6px 10px;
  font-family: 'Roboto';
  font-size: 16px;
  border-style: solid;
  border-width: 1px;
  border-color: #64748b;
  color: ${props => (props.isLightTheme ? '#181818' : '#f0f0f0')};
  background-color: ${props => (props.isLightTheme ? '#f0f0f0' : '#181818')};
  outline: none;
`

export const SearchIconButton = styled.button`
  background-color: ${props => (props.isLightTheme ? '#f0f0f0' : '#383838')};
  height: 33px;
  width: 60px;
  border-style: solid;
  border-width: 1px;
  border-color: #64748b;
  cursor: pointer;
`

export const LoadingContainer = styled.div`
  height: 47vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isLightTheme ? '#f0f0f0' : '#181818')};
  margin-top: 10px;
`

export const FailureContainer = styled.div`
  height: 100%;
  padding: 30px 60px 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isLightTheme ? '#f0f0f0' : '#181818')};
  margin-top: 10px;
`

export const FailureImage = styled.img`
  width: 300px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  font-size: 28px;
  color: ${props => (props.isLightTheme ? '#212121' : '#ffffff')};
`

export const FailureParagraph = styled.p`
  color: #606060;
  font-family: 'Roboto';
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`

export const RetryButton = styled.button`
  color: white;
  background-color: #4f46e5;
  border-width: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 13px 30px 13px 30px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`

export const VideosUlContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  height: 100%;
  padding: 20px 0px 20px 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isLightTheme ? '#f0f0f0' : '#181818')};
`

export const NoVideosContainer = styled.div`
  height: 100%;
  padding: 30px 60px 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isLightTheme ? '#f0f0f0' : '#181818')};
  margin-top: 10px;
`

export const NoVideosImage = styled.img`
  width: 40%;
`
