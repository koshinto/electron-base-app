import React from 'react'
import Adder from './Adder'

export default function Greet() {
  const element: JSX.Element = (
    <div>
      <div>
        <h1>Hello, React!</h1>
        <p>React is wonderful JavaScript FlameWork.</p>
      </div>
      <Adder />
    </div>
  )
  return element
}
