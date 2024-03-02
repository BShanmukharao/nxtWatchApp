import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const EachVideoContainer = styled.div`
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#181818')};
`

export const MenuOptionAndEachVideoContainer = styled.div`
  display: flex;
  height: 89vh;
`

export const EachVideoDetailsContainer = styled.div`
  width: 80%;
  overflow-y: auto;
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#181818')};
`

export const LoadingContainer = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  height: 100%;
  padding: 30px 60px 30px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isLightTheme ? '#ebebeb' : '#181818')};
`
export const FailureImage = styled.img`
  width: 300px;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isLightTheme ? '#212121' : '#ffffff')};
  font-family: 'Roboto';
  text-align: center;
  font-size: 28px;
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
export const UniqueVideoDetailsContainer = styled.div`
  height: 100%;
  padding: 20px 20px 20px 20px;
  background-color: ${props => (props.isLightTheme ? '#f9f9f9' : '#181818')};
`

export const YoutubeVideoContainer = styled.div`
  width: 100%;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.isLightTheme ? '#000000' : '#ffffff')};
`

export const SubscribersContainer = styled.div`
  color: ${props => (props.isLightTheme ? '#000000' : '#ffffff')};
  font-family: 'Roboto';
`

export const ViewsPara = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isLightTheme ? '#000000' : '#ffffff')};
`

export const ViewsAndLikeAndDisLikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto';
`

export const LikesAndDisLikesAndSavedButtonUlContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
`

export const EachCommentsIcon = styled.li`
  margin-left: 15px;
  font-family: 'Roboto';
`
export const LikeButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  border-width: 0px;
  font-weight: 600;
  font-family: 'Roboto';
  color: ${props => (props.likeButton ? '#2563eb' : '#64748b')};
`

export const DisLikeButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  border-width: 0px;
  font-weight: 600;
  font-family: 'Roboto';
  color: ${props => (props.disLikeButton ? '#2563eb' : '#64748b')};
`

export const SavedButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  border-width: 0px;
  font-weight: 600;
  font-family: 'Roboto';
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`

export const ChannelLogoAndSubCountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 60px;
`

export const ChannelLogo = styled.img`
  height: 50px;
  width: 50px;
  align-self: flex-start;
  margin-top: 15px;
  margin-right: 15px;
`
