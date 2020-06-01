import React from 'react'
import ReactDOM from 'react-dom'
import { DiReact } from 'react-icons/di'
import Greet from './components/Greet'
import './global.scss'

function Home() {
  return (
    <div>
      <span className="ico-react">
        <DiReact />
      </span>
      <Greet />
    </div>
  )
}

ReactDOM.render(<Home />, document.getElementById('app'))
