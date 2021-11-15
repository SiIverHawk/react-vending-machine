import React from "react"
import { Provider } from "react-redux"
import VendingMachine from "./Components/VendingMachine/VendingMachine"
import { store } from "./State/store/store"
import Header from "./UI/Header/Header"

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <VendingMachine />
      </Provider>
    </>
  )
}

export default App

