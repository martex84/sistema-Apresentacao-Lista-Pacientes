import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.scss'
import App from './App'
import { ResultPessoaProvider } from './context/contextApiResultPacients'

ReactDOM.render(
  <React.StrictMode>
    <ResultPessoaProvider>
      <App />
    </ResultPessoaProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
