import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import MenuOptionsContainer from '../MenuOptionsContainer'
import EachTrendingVideo from '../EachTrendingVideo'
import ConsumerObject from '../ConsumerObjext'
import './index.css'
import {
  TrendingContainer,
  MenuOptionAndTrendingContainer,
  NavBarAndTrendingVideosContainer,
  FireIconAndTrendingHeadingContainer,
  FireIconContainer,
  TrendingHeading,
  TrendingVideosContianer,
  EachTrendingVideoUlContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureParagraph,
  RetryButton,
  LoadingContainer,
} from './styledComponent'

const apiConstraint = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {initialApiStatus: apiConstraint.initial, trendingVideosData: []}

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({initialApiStatus: apiConstraint.loading})
    const jwtToken = Cookies.get('jwt_token')
    const ULR = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      metohd: 'GET',
    }
    const response = await fetch(ULR, options)
    const Data = await response.json()
    if (response.ok === true) {
      const updateData = Data.videos.map(eachTrendingVideoDetails => ({
        id: eachTrendingVideoDetails.id,
        channelName: eachTrendingVideoDetails.channel.name,
        profileImgUrl: eachTrendingVideoDetails.channel.profile_image_url,
        publishedTime: eachTrendingVideoDetails.published_at,
        thumbnialUrl: eachTrendingVideoDetails.thumbnail_url,
        title: eachTrendingVideoDetails.title,
        viewers: eachTrendingVideoDetails.view_count,
      }))
      this.setState({
        trendingVideosData: updateData,
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
    const {trendingVideosData} = this.state
    return (
      <TrendingVideosContianer isLightTheme={isLightTheme}>
        <EachTrendingVideoUlContainer>
          {trendingVideosData.map(eachItem => (
            <EachTrendingVideo key={eachItem.id} eachItemDetails={eachItem} />
          ))}
        </EachTrendingVideoUlContainer>
      </TrendingVideosContianer>
    )
  }

  onTrendingRetry = () => {
    this.getTrendingVideosData()
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
      <RetryButton type="button" onClick={this.onTrendingRetry}>
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
            <TrendingContainer
              data-testid="trending"
              isLightTheme={isLightTheme}
            >
              <Header />
              <MenuOptionAndTrendingContainer>
                <MenuOptionsContainer />
                <NavBarAndTrendingVideosContainer isLightTheme={isLightTheme}>
                  <FireIconAndTrendingHeadingContainer
                    isLightTheme={isLightTheme}
                  >
                    <FireIconContainer isLightTheme={isLightTheme}>
                      <HiFire className="fireIcon" />
                    </FireIconContainer>
                    <TrendingHeading isLightTheme={isLightTheme}>
                      Trending
                    </TrendingHeading>
                  </FireIconAndTrendingHeadingContainer>
                  {this.renderCards(isLightTheme)}
                </NavBarAndTrendingVideosContainer>
              </MenuOptionAndTrendingContainer>
            </TrendingContainer>
          )
        }}
      </ConsumerObject.Consumer>
    )
  }
}

export default TrendingRoute
