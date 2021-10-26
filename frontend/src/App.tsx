import { useState, useEffect, useContext, useCallback } from 'react'
import { VscSearch } from 'react-icons/vsc'
import { BsArrowClockwise, BsSortAlphaDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Row } from './components/row';
import { ResultContext } from './context/contextApiResultPacients'
import { DadosPessoaContextFinal } from './types'

import styles from './styles/App.module.scss'
import { Modal } from './components/modal';

const hrefLocation = window.location.href.split("?page=")

function App() {

  const [arrayPessoa, setArrayPessoa] = useState<DadosPessoaContextFinal[]>([]);

  const [pessoa, setPessoa] = useState<DadosPessoaContextFinal>({
    name: {
      title: "",
      first: "",
      last: ""
    },
    email: "",
    gender: "",
    dob: {
      date: {
        day: "",
        month: "",
        year: ""
      }
    },
    cell: "",
    nat: "",
    location: {
      street: {
        number: "",
        name: ""
      },
      city: "",
      state: "",
      country: ""
    },
    id: {
      value: "",
    },
    picture: {
      large: ""
    },
    url: ``
  });

  const resultContext = useContext(ResultContext);

  if (resultContext.user.length === 0) {
    resultContext.changePage(hrefLocation[1]);
  }

  if (hrefLocation[1] === undefined) {
    history.pushState({}, "", `${hrefLocation[0]}?page=1`);
  }

  function mudancaPage() {

    const numeroPage: number = parseInt(hrefLocation[1]) + 1;

    history.pushState({}, "", `${hrefLocation[0]}?page=${numeroPage}`);

    resultContext.changePage(`${numeroPage}`);

    window.location.reload();
  }

  function viewPaciente(id: string) {
    if (arrayPessoa) {
      arrayPessoa.forEach(valor => {
        if (valor.id.value === id) {
          setPessoa(valor);
        }
      })
    }
  }

  useEffect(() => {
    if (arrayPessoa.length === 0 && resultContext.user.length !== 0) {
      setArrayPessoa(resultContext.user);
    }
  }, [resultContext]);

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
                    key={valor.id.value}
                    name={valor.name}
                    date={valor.dob.date}
                    gender={valor.gender}
                    id={valor.id.value}
                    view={viewPaciente}
                  />
                );
              }
            })}
          </ul>
        </div>
        <div className={`${styles.containerMoreRow} d-flex flex-row align-items-center justify-content-center mt-4`} >
          <button onClick={() => mudancaPage()}>
            <span>
              <BsArrowClockwise size="30" />
            </span>
            <span>
              Loading more ...
            </span>
          </button>
        </div>
      </section>
      <Modal
        name={{
          title: pessoa.name.title,
          first: pessoa.name.first,
          last: pessoa.name.last
        }}
        email={pessoa.email}
        gender={pessoa.gender}
        dob={{
          date: {
            day: pessoa.dob.date.day,
            month: pessoa.dob.date.month,
            year: pessoa.dob.date.year
          }
        }}
        cell={pessoa.cell}
        nat={pessoa.nat}
        location={pessoa.location}
        id={{
          value: pessoa.id.value
        }}
        picture={{
          large: pessoa.picture.large
        }}
        url={pessoa.url}
      />
      <Footer />
    </div>
  )
}

export default App
