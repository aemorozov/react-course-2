import React from "react"
import * as ReactDOMClient from "react-dom/client"


class Header extends React.Component {
  render() {
    return (
      <header>{this.props.title}</header>
    )
  }
}

class App extends React.Component {
  helpText = 'Help text'
  render() {
    return (
      <>
        <Header title="Header title" />
        <h1>{this.helpText}</h1>
        <input placeholder={this.helpText}
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver} />
        <p>{this.helpText === 'Help text' ? 'yes' : 'no'}</p>
      </>
    )
  }
  inputClick() { console.log('Clicked') }
  mouseOver() { console.log('Mouse Over') }
}

const app = ReactDOMClient.createRoot(document.getElementById("root"))
app.render(<App />)