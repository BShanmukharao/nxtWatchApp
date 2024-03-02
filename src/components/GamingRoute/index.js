import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import MenuOptionsContainer from '../MenuOptionsContainer'
import EachGamingVideo from '../EachGamingVideo'
import ConsumerObject from '../ConsumerObjext'
import './index.css'
import {
  GamingContainer,
  MenuOptionAndGamingContainer,
  NavBarAndGamingVideosContainer,
  GameIconAndTrendingHeadingContainer,
  GameIconContainer,
  GamingHeading,
  LoadingContainer,
  GamingVideosContianer,
  EachGamingVideoUlContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureParagraph,
  RetryButton,
} from './styledComponent'

const apiConstraint = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class GamingRoute extends Component {
  state = {initialApiStatus: apiConstraint.initial, gamingVideosData: []}

  componentDidMount() {
    this.getgamingVideosData()
  }

  getgamingVideosData = async () => {
    this.setState({initialApiStatus: apiConstraint.loading})
    const jwtToken = Cookies.get('jwt_token')
    const ULR = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      metohd: 'GET',
    }
    const response = await fetch(ULR, options)
    const Data = await response.json()
    if (response.ok === true) {
      const updatedGaminData = Data.videos.map(eachGamingItem => ({
        id: eachGamingItem.id,
        thumbnialUrl: eachGamingItem.thumbnail_url,
        title: eachGamingItem.title,
        viewers: eachGamingItem.view_count,
      }))
      this.setState({
        gamingVideosData: updatedGaminData,
        initialApiStatus: apiConstraint.success,
      })
    } else {
      this.setState({initialApiStatus: apiConstraint.failure})
    }
  }

  renderLoading = isLightTheme => (
    <LoadingContainer data-testid="loader" isLightTheme={isLightTheme}>
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoadingContainer>
  )

  renderSuccessCard = isLightTheme => {
    const {gamingVideosData} = this.state
    return (
      <GamingVideosContianer isLightTheme={isLightTheme}>
        <EachGamingVideoUlContainer>
          {gamingVideosData.map(eachGamingDetails => (
            <EachGamingVideo
              key={eachGamingDetails.id}
              eachGamingDetails={eachGamingDetails}
            />
          ))}
        </EachGamingVideoUlContainer>
      </GamingVideosContianer>
    )
  }

  onGamingRetry = () => {
    this.getgamingVideosData()
  }

  renderFailureCard = isLightTheme => (
    <FailureContainer isLightTheme={isLightTheme}>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading isLightTheme={isLightTheme}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailureParagraph isLightTheme={isLightTheme}>
        We are having some trouble to complete your request.Please try again
      </FailureParagraph>
      <RetryButton type="button" onClick={this.onGamingRetry}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderCards = isLightTheme => {
    const {initialApiStatus} = this.state
    switch (initialApiStatus) {
      case apiConstraint.loading:
        return this.renderLoading(isLightTheme)
      case apiConstraint.success:
        return this.renderSuccessCard(isLightTheme)
      case apiConstraint.failure:
        return this.renderFailureCard(isLightTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ConsumerObject.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <GamingContainer data-testid="gaming" isLightTheme={isLightTheme}>
              <Header />
              <MenuOptionAndGamingContainer>
                <MenuOptionsContainer />
                <NavBarAndGamingVideosContainer isLightTheme={isLightTheme}>
                  <GameIconAndTrendingHeadingContainer
                    isLightTheme={isLightTheme}
                  >
                    <GameIconContainer isLightTheme={isLightTheme}>
                      <SiYoutubegaming className="GamingIcon" />
                    </GameIconContainer>
                    <GamingHeading isLightTheme={isLightTheme}>
                      Gaming
                    </GamingHeading>
                  </GameIconAndTrendingHeadingContainer>
                  {this.renderCards(isLightTheme)}
                </NavBarAndGamingVideosContainer>
              </MenuOptionAndGamingContainer>
            </GamingContainer>
          )
        }}
      </ConsumerObject.Consumer>
    )
  }
}

export default GamingRoute
