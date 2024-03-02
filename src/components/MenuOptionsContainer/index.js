import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'
import ConsumerObjext from '../ConsumerObjext'
import './index.css'
import {
  MeniOptionsContainer,
  UlMenuOptions,
  EachNavItem,
  EachNavItemName,
  MenuOptionBelowContainer,
  ContactUsParagraph,
  SocialMediaIcon,
  EnjoyParagraph,
} from './styledComponent'

class MenuOptionsContainer extends Component {
  render() {
    return (
      <ConsumerObjext.Consumer>
        {value => {
          const {isLightTheme} = value
          const isThemeIcon = isLightTheme ? 'lightTheme' : 'DarkTheme'
          return (
            <MeniOptionsContainer isLightTheme={isLightTheme}>
              <UlMenuOptions>
                <EachNavItem>
                  <Link to="/" className={`EachNavItemLink ${isThemeIcon}`}>
                    <IoMdHome className="eachNavIcon" />
                    <EachNavItemName isLightTheme={isLightTheme}>
                      Home
                    </EachNavItemName>
                  </Link>
                </EachNavItem>
                <EachNavItem>
                  <Link
                    to="/trending"
                    className={`EachNavItemLink ${isThemeIcon}`}
                  >
                    <HiFire className="eachNavIcon" />
                    <EachNavItemName isLightTheme={isLightTheme}>
                      Trending
                    </EachNavItemName>
                  </Link>
                </EachNavItem>
                <EachNavItem>
                  <Link
                    to="/gaming"
                    className={`EachNavItemLink ${isThemeIcon}`}
                  >
                    <SiYoutubegaming className="eachNavIcon" />
                    <EachNavItemName isLightTheme={isLightTheme}>
                      Gaming
                    </EachNavItemName>
                  </Link>
                </EachNavItem>
                <EachNavItem>
                  <Link
                    to="/saved-videos"
                    className={`EachNavItemLink ${isThemeIcon}`}
                  >
                    <RiMenuAddFill className="eachNavIcon" />
                    <EachNavItemName isLightTheme={isLightTheme}>
                      Saved videos
                    </EachNavItemName>
                  </Link>
                </EachNavItem>
              </UlMenuOptions>
              <MenuOptionBelowContainer>
                <ContactUsParagraph isLightTheme={isLightTheme}>
                  CONTACT US
                </ContactUsParagraph>
                <div>
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </div>
                <EnjoyParagraph isLightTheme={isLightTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </EnjoyParagraph>
              </MenuOptionBelowContainer>
            </MeniOptionsContainer>
          )
        }}
      </ConsumerObjext.Consumer>
    )
  }
}

export default MenuOptionsContainer
