import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import Home from './components/Home'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import EachVideoItemDetailsRoute from './components/EachVideoItemDetailsRoute'
import ConsumerObjext from './components/ConsumerObjext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isLightTheme: true, savedItemsData: []}

  onToggleTheme = () => {
    this.setState(prevState => ({
      isLightTheme: !prevState.isLightTheme,
    }))
  }

  renderSaveItems = data => {
    console.log(data)
  }

  render() {
    const {isLightTheme, savedItemsData} = this.state
    return (
      <ConsumerObjext.Provider
        value={{
          isLightTheme,
          savedItemsData,
          onToggleTheme: this.onToggleTheme,
          renderSaveItems: this.renderSaveItems,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={EachVideoItemDetailsRoute}
          />
        </Switch>
      </ConsumerObjext.Provider>
    )
  }
}

export default App
