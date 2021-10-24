import { useState } from 'react'
import { VscSearch } from 'react-icons/vsc'

import { Header } from './components/header';
import { Footer } from './components/footer';
import styles from './styles/App.module.scss'

function App() {

  return (
    <div className={`${styles.app} d-flex flex-column align-items-stretch`}>
      <Header />
      <section className={`${styles.sectionContainer} mb-auto`}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus mauris elit sem convallis tincidunt eget. Nunc consequat et amet, sed ut. Mattis a, ut interdum phasellus ipsum, dictum dolor urna. Pulvinar turpis pharetra, dui id mi morbi enim semper sit.
        </div>
        <div className={`${styles.searchContainer} d-flex justify-content-center p-4`}>
          <input type="text" placeholder="Searching" />
          <button>
            <VscSearch />
          </button>
        </div>
        <div>
          Tabela
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
