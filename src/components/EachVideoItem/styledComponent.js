import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const EachLiItem = styled.li`
  width: 204px;
  margin-right: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    width: 46%;
  }
  @media screen and (min-width: 768px) {
    width: 31%;
  }
`

export const EachVideoThumbnail = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  margin-top: 0px;
`

export const ChannelLogo = styled.img`
  height: 30px;
  width: 30px;
  margin-top: 20px;
  margin-right: 8px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 7px;
  padding-bottom: 0px;
  color: ${props => (props.isLightTheme ? '#000000' : '#ffffff')};
`

export const YoutubeName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 0px;
  padding-top: 0px;
  font-weight: 500;
  margin-bottom: 0px;
  padding-bottom: 0px;
  color: ${props => (props.isLightTheme ? '#424242' : ' #64748b')};
`

export const YoutubeViweres = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 0px;
  padding-top: 0px;
  font-weight: 500;
  color: ${props => (props.isLightTheme ? '#424242' : ' #64748b')};
`

export const Dot = styled.span`
  font-weight: bold;
  font-size: 25px;
  margin-top: 0px;
  padding-top: 0px;
`
