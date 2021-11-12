import React from "react"
import VendingMachine from "./Components/VendingMachine/VendingMachine"
import Header from "./UI/Header/Header"

const App: React.FC = () => {
  return (
    <>
      <Header />
      <VendingMachine />
    </>
  )
}

export default App

