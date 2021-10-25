import { useState, useEffect } from 'react'
import { VscSearch } from 'react-icons/vsc'
import { BsSortAlphaDown, BsArrowClockwise } from 'react-icons/bs'

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Row } from './components/row';
import styles from './styles/App.module.scss'


type IDadosPessoa = {
  nome: string,
  email: string,
  genero: string,
  dataNascimento: string,
  telefone: string,
  nacionalidade: string,
  endereco: string,
  id: string,
  url: string
}

function App() {

  const [arrayPessoa, setArrayPessoa] = useState<IDadosPessoa[]>([]);

  useEffect(() => {
    if (arrayPessoa.length === 0) {
      setArrayPessoa([{
        nome: "Marcelo",
        email: "Email",
        genero: "Masculino",
        dataNascimento: "00/00/00",
        telefone: "Telefone",
        nacionalidade: "Brasileiro",
        endereco: "Endereço",
        id: "asdasda",
        url: "www.local.com.br"
      }])
    }
  }, [])

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
          <ul className={`${styles.containerTable}`}>
            <ul className={`d-flex flex-row align-items-center justify-content-center`}>
              <li className={`d-flex flex-row align-items-center justify-content-center`}>
                <span>
                  Name
                </span>
                <span className={styles.containerIcon}>
                  <BsSortAlphaDown />
                </span>
              </li>
              <li className={`d-flex flex-row align-items-center justify-content-center`}>
                <span>
                  Gender
                </span>
              </li>
              <li className={`d-flex flex-row align-items-center justify-content-center`}>
                <span>
                  Birth
                </span>
              </li>
              <li className={`d-flex flex-row align-items-center justify-content-center`}>
                <span>
                  Actions
                </span>
              </li>
            </ul>
            {arrayPessoa.map(valor => {
              if (valor) {
                return (
                  <Row
                    key={valor.id}
                    nome={valor.nome}
                    dataNascimento={valor.dataNascimento}
                    genero={valor.genero}
                    id={valor.id}
                  />
                );
              }
            })}
          </ul>
        </div>
        <div className={`${styles.containerMoreRow} d-flex flex-row align-items-center justify-content-center mt-4`} >
          <button>
            <span>
              <BsArrowClockwise size="30" />
            </span>
            <span>
              Loading more ...
            </span>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
