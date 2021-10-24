import { useState } from 'react'
import { Header } from './components/header'
import styles from './styles/App.module.scss'

function App() {

  return (
    <div className={styles.app}>
      <Header />
    </div>
  )
}

export default App
