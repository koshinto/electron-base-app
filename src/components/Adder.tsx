import React from 'react'
import './adder.scss'

interface Props {}
interface State {
  count: number
}

export default class Adder extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  handleClick = (): void => this.setState({ count: 0 })

  render(): JSX.Element {
    return (
      <div id="adder">
        <div className="contents">
          <button
            className="btn"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Add
          </button>
          <button className="btn" onClick={this.handleClick}>
            Reset
          </button>
          <p className="counter">{this.state.count}</p>
        </div>
      </div>
    )
  }
}
