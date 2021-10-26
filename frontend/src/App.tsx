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

  async function verificaLink() {
    if (resultContext.user.length === 0) {
      await resultContext.changePage(hrefLocation[1]);
    }
  }

  verificaLink();

  if (hrefLocation[1] === undefined) {
    history.pushState({}, "", `${hrefLocation[0]}?page=1`);
  }

  if (resultContext.user.length !== 0 && hrefLocation[1] !== undefined) {
    if (hrefLocation[1].indexOf("id") !== -1) {

      const localStorageSal: any | null = localStorage.getItem("SALPessoa")

      const id = hrefLocation[1].split("id=")[1];

      if (localStorageSal === null) {

        resultContext.user.forEach(valor => {
          if (valor.id.value === id) {
            setPessoa(valor);

            createLocalStorate(true, false);

          }
        });
      }
      else if (JSON.parse(localStorage.getItem("SALPessoa") as string).model === false) {
        if (verificaPessoa() === false) {
          resultContext.user.forEach(valor => {
            if (valor.id.value === id) {
              setPessoa(valor);
            }
          });
        }
      }
    }
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

    console.log(pessoa);

    if (localStorage.getItem("SALPessoa") === null) {
      createLocalStorate(true, false);
    }
  }

  function createLocalStorate(model: boolean, view: boolean) {
    localStorage.setItem("SALPessoa", JSON.stringify({
      model: false,
      view: false
    }))
  }

  function verificaPessoa() {
    const verificacao = Object.values(pessoa).filter((valor) => valor !== "");

    let valorRetorno = false;

    console.log(verificacao);

    if (verificacao.length === 10) {
      valorRetorno = true;
    }

    return valorRetorno
  }

  useEffect(() => {
    if (verificaPessoa() === true) {
      createLocalStorate(true, true);
    }
  }, [setPessoa])

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
        pessoa={pessoa}
      />
      <Footer />
    </div>
  )
}

export default App
