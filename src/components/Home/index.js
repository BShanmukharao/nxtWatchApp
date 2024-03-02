import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {IoClose} from 'react-icons/io5'
import {IoMdSearch} from 'react-icons/io'
import EachVideoItem from '../EachVideoItem'
import MenuOptionsContainer from '../MenuOptionsContainer'
import ConsumerObject from '../ConsumerObjext'

import {
  HomeContainer,
  MenuOptionAndVideosContainer,
  VideosAndBannerContainer,
  BannerContainer,
  WebsiteLogo,
  WebsiteLogoAndCloseButtonContainer,
  BannerCloseButton,
  BannerDescription,
  BannerButton,
  VideosAndSearchContainer,
  SearchContainer,
  SearchInput,
  SearchIconButton,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureParagraph,
  RetryButton,
  VideosUlContainer,
  NoVideosContainer,
  NoVideosImage,
} from './styledComponent'
import './index.css'
import Header from '../Header'

const apiConstraint = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class HomeRoute extends Component {
  state = {
    isBannerDisplay: true,
    userInput: '',
    videosData: [],
    initialApiStatus: apiConstraint.initial,
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({initialApiStatus: apiConstraint.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {userInput} = this.state
    const ULR = `https://apis.ccbp.in/videos/all?search=${userInput}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      metohd: 'GET',
    }
    const response = await fetch(ULR, options)
    const Data = await response.json()
    if (response.ok === true) {
      const updateData = Data.videos.map(eachVideoItem => ({
        youTubeChannel: eachVideoItem.channel.name,
        profileImageUrl: eachVideoItem.channel.profile_image_url,
        id: eachVideoItem.id,
        publishedTime: eachVideoItem.published_at,
        thumbnialUrl: eachVideoItem.thumbnail_url,
        title: eachVideoItem.title,
        viewers: eachVideoItem.view_count,
      }))
      this.setState({
        videosData: updateData,
        initialApiStatus: apiConstraint.success,
      })
    } else {
      this.setState({initialApiStatus: apiConstraint.failure})
    }
  }

  getUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  getUserEnterKey = event => {
    if (event.key === 'Enter') {
      this.getVideosData()
    }
  }

  onClickBannerButton = () => {
    this.setState({isBannerDisplay: false})
  }

  onRetry = () => {
    this.getVideosData()
  }

  onClickNoResultButton = () => {
    this.setState({userInput: ''}, this.getVideosData)
  }

  renderLoadingCard = isLightTheme => (
    <LoadingContainer data-testid="loader" isLightTheme={isLightTheme}>
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoadingContainer>
  )

  renderSuccessCards = isLightTheme => {
    const {videosData} = this.state
    return (
      <div>
        {videosData.length === 0 ? (
          <NoVideosContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureHeading>No Search results found</FailureHeading>
            <FailureParagraph>
              Try different key words or remove search filter
            </FailureParagraph>
            <RetryButton onClick={this.onClickNoResultButton} type="button">
              Retry
            </RetryButton>
          </NoVideosContainer>
        ) : (
          <VideosUlContainer isLightTheme={isLightTheme}>
            {videosData.map(eachVideoDetails => (
              <EachVideoItem
                eachVideoDetails={eachVideoDetails}
                key={eachVideoDetails.id}
              />
            ))}
          </VideosUlContainer>
        )}
      </div>
    )
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
      <RetryButton type="button" onClick={this.onRetry}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderCards = isLightTheme => {
    const {initialApiStatus} = this.state
    switch (initialApiStatus) {
      case apiConstraint.loading:
        return this.renderLoadingCard(isLightTheme)
      case apiConstraint.success:
        return this.renderSuccessCards(isLightTheme)
      case apiConstraint.failure:
        return this.renderFailureCard(isLightTheme)
      default:
        return null
    }
  }

  onClickSearchButton = () => {
    this.getVideosData()
  }

  render() {
    const {isBannerDisplay, userInput} = this.state
    return (
      <ConsumerObject.Consumer>
        {value => {
          const {isLightTheme} = value
          return (
            <HomeContainer data-testid="home" isLightTheme={isLightTheme}>
              <Header />
              <MenuOptionAndVideosContainer>
                <MenuOptionsContainer />
                <VideosAndBannerContainer>
                  {isBannerDisplay && (
                    <BannerContainer data-testid="banner">
                      <WebsiteLogoAndCloseButtonContainer>
                        <WebsiteLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerCloseButton
                          data-testid="close"
                          label="bannerClose"
                          type="button"
                          onClick={this.onClickBannerButton}
                        >
                          <IoClose className="CloseIcon" />
                        </BannerCloseButton>
                      </WebsiteLogoAndCloseButtonContainer>
                      <BannerDescription>
                        Buy Nxt Watch Premium prepaid plans withUPI
                      </BannerDescription>
                      <BannerButton>GET IT NOW</BannerButton>
                    </BannerContainer>
                  )}
                  <VideosAndSearchContainer>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        onChange={this.getUserInput}
                        onKeyDown={this.getUserEnterKey}
                        value={userInput}
                        isLightTheme={isLightTheme}
                      />
                      <SearchIconButton
                        data-testid="searchButton"
                        onClick={this.onClickSearchButton}
                        type="button"
                        isLightTheme={isLightTheme}
                      >
                        <IoMdSearch className="searchIcon" />
                      </SearchIconButton>
                    </SearchContainer>
                    {this.renderCards(isLightTheme)}
                  </VideosAndSearchContainer>
                </VideosAndBannerContainer>
              </MenuOptionAndVideosContainer>
            </HomeContainer>
          )
        }}
      </ConsumerObject.Consumer>
    )
  }
}

export default HomeRoute
