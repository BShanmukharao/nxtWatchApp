import React from 'react'

const ConsumerObjext = React.createContext({
  isLightTheme: true,
  onToggleTheme: () => {},
  renderSaveItems: () => {},
  savedItemsData: [],
})

export default ConsumerObjext
