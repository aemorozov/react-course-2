import React from "react"
import Header from "./Components/Header"

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

export default App