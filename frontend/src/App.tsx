import { useState } from 'react'

import { Header } from './components/header';
import { Footer } from './components/footer';
import styles from './styles/App.module.scss'

function App() {

  return (
    <div className={styles.app}>
      <Header />
      <section>

      </section>
      <Footer />
    </div>
  )
}

export default App
