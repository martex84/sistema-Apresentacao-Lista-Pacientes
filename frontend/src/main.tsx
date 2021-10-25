import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { Routes } from './route'
import { ResultPessoaProvider } from './context/contextApiResultPacients'

import './styles/index.scss'
ReactDOM.render(
  <React.StrictMode>
    <ResultPessoaProvider>
      <Routes />
    </ResultPessoaProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
