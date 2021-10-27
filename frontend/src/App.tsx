import { useState, useEffect, useContext, useCallback } from 'react'
import { VscSearch } from 'react-icons/vsc'
import { BsArrowClockwise, BsSortAlphaDown } from 'react-icons/bs'
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

  const [showModal, setShowModal] = useState<boolean>(false);

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
      let posicaoSite: string = "1"

      if (hrefLocation.length >= 2) {
        hrefLocation[1].split("&")[0] === undefined ? hrefLocation[1] : hrefLocation[1].split("&")[0];
        await resultContext.changePage(posicaoSite).then(() => { });
      }
      else if (hrefLocation.length === 1) {
        await resultContext.changePage(posicaoSite).then(() => { });
      }

    }
  }

  verificaLink();

  //Verifica presença de pequisa por id
  if (hrefLocation[1] !== undefined) {
    if (hrefLocation.length === 2) {
      if (hrefLocation[1].indexOf("id") !== -1) {
        createLocalStorate(true, false);
      }
      else if (JSON.parse(localStorage.getItem("SALPessoa") as string) === null) {
        createLocalStorate(false, false);
      }
    }
  }
  else if (hrefLocation.length === 1) {
    history.pushState({}, "", `${hrefLocation[0]}?page=1`);
    createLocalStorate(false, false);
  }
  //Verifica presença de paginação(Normal)


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

    if (JSON.parse(localStorage.getItem("SALPessoa") as string) === null) {
      createLocalStorate(false, false);
    }
  }

  function createLocalStorate(model: boolean, view: boolean) {
    localStorage.setItem("SALPessoa", JSON.stringify({
      model: model,
      view: view
    }))
  }

  function setModal(valor: boolean) {
    setShowModal(valor);
  }

  useEffect(() => {
    if (arrayPessoa.length === 0 && resultContext.user.length !== 0) {
      setArrayPessoa(resultContext.user);
    }
    else if (arrayPessoa.length > 0) {
      if (localStorage.getItem("SALPessoa") !== null) {
        if (JSON.parse(localStorage.getItem("SALPessoa") as string).view === true && JSON.parse(localStorage.getItem("SALPessoa") as string).model === false) {
          createLocalStorate(false, true);
        }
        else if (JSON.parse(localStorage.getItem("SALPessoa") as string).view === false && JSON.parse(localStorage.getItem("SALPessoa") as string).model === true && hrefLocation.length >= 2) {
          const id = hrefLocation[1].split("id=")[1];

          if (id !== undefined && showModal === false) {
            const pessoaInterna = arrayPessoa.filter((pessoa) => pessoa.id.value === id);

            setPessoa(pessoaInterna[0] as DadosPessoaContextFinal);

            resultContext.changeModel("show", { display: 'block' });

            setShowModal(true);
          }
        }
      }
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
        changeModal={
          {
            showModal,
            setModal
          }
        }
      />
      <Footer />
    </div>
  )
}

export default App
